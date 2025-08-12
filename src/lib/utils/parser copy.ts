const scope =
	'{\n"x":{"min":9, "max":90, "round":0},\n"y":{"min":1, "max":9, "round":0},\n"n":{"min":1, "max":30, "round":0}}';
const body = 'onde x = |x|, n = |n| e y = |y|';

console.log(scope, body);

import type { FactoryData, RandomParams, Scope } from '$lib/types/FactoryData';
import { evaluate } from 'mathjs';

// Generates a random number
const rdGen = (min: number, max: number, round?: number, type?: string) => {
	const numb = Math.random() * (max - min) + min;
    //numb = numb >= 0 ? `+${numb}` : `${numb}`;

	if (type === 'even') {
		const res = +numb.toFixed(round ? round : 0);
		return res % 2 === 0 ? res : res + 1;
	} else if (type === 'odd') {
		const res = +numb.toFixed(round ? round : 0);
		return res % 2 === 0 ? res + 1 : res;
	} else {
		return +numb.toFixed(round ? round : 0);
	}
};

// Check if the param is of type random
const rdCheck = (param: RandomParams) =>
	param.min !== undefined && param.max !== undefined && param.round !== undefined;

// Convert scope from string into object
const scopeMiddleware = (scope: string) => {
	const _scope: Scope = JSON.parse(scope);
	//console.log(" 00 ",_scope)

	Object.entries(_scope).forEach(([key, value]) => {
		if (typeof value !== 'string' && rdCheck(value)) {
			const { min, max, round, type, hasSignal } = value;
			const random = rdGen(min, max, round, type);
            
			_scope[key] = hasSignal?"+ "+(random):String(random);
            console.log("random ", random, hasSignal, _scope[key])
		}
	});
	//console.log(" 01 ",_scope)
	return _scope;
};

const bodyParser = (body: string, scope: Scope /* { [id: string]: string } */) => {
    const words = body.split('|');
	// console.log(words)
    

	const bodyParsed = words.map((word: string) => {
        return scope[word] !== undefined ? evaluate(middleParser(String(scope[word]), scope)) : word; //scope[word] : word;
	});
    console.log("scope ", scope, "bodyParsed", bodyParsed)

	return bodyParsed.join('');
};

const middleParser = (word: string, scope: Scope /* , data: FactoryData */) => {
	//const scope = scopeMiddleware(data.scope);
	const middleWords = word.split('|');
	const wordsParsed = middleWords.map((middleWord: string) => {
		return scope[middleWord] !== undefined ? scope[middleWord] : middleWord;
	});
	//console.log("Word", word,"MiddleWords ",middleWords, "wParserd", wordsParsed)
	return wordsParsed.join('');
};

export const questParser = (data: FactoryData) => {
	if (data.scope) {
		const scope = scopeMiddleware(data.scope);
        console.log("scope ", scope)

		const body = bodyParser(data.body, scope);
        console.log("body ", body)
		const ans = bodyParser(data.ans, scope);
        console.log("ans ", ans)
		const questData = {
			body,
			ans

			/* editorBody */
		};
		return questData;
	} else {
		const questData = {
			body: data.body,
            ans: data.ans

			/* editorBody */
		};
		return questData;
	}
};

// console.log(questParser({ body, scope }));
