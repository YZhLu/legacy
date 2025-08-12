import * as math from 'mathjs';

interface Variable {
	min: number;
	max: number;
	round?: number;
	type?: string;
	notNull?: boolean;
}

interface Scope {
	[key: string]: Variable;
}

interface GeneratedValues {
	[key: string]: number;
}

export class ExpressionParser {
	private scope: Scope;
	private generatedValues: GeneratedValues = {};

	constructor(scopeStr: string) {
		this.scope = this.parseScope(scopeStr);
	}

	private formatToLatexFraction(value: number): { n: number; d: number; s: string } {
		// console.log("value ",value);
		const frac = math.fraction(value);
		// Convert BigInt to number if necessary
		const n = typeof frac.n === 'bigint' ? Number(frac.n) : frac.n;
		const d = typeof frac.d === 'bigint' ? Number(frac.d) : frac.d;

		return {
			n: Math.abs(n),
			d: Math.abs(d),
			s: frac.s < 0 ? '-' : ''
		};
	}

	private parseScope(scopeStr: string): Scope {
		try {
			const rawScope = JSON.parse(scopeStr);
			const scope: Scope = {};
			this.generatedValues = {}; // Reset generated values

			// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
			const helperMethods: { [key: string]: Function } = {
				formatToLatexFraction: this.formatToLatexFraction
			};

			// Primeiro passo: processa as variáveis regulares
			for (const [key, value] of Object.entries(rawScope)) {
				if (typeof value === 'object') {
					scope[key] = value as Variable;
					this.generatedValues[key] = this.getRandomNum(
						scope[key].min,
						scope[key].max,
						scope[key].round,
						scope[key].type,
						scope[key].notNull
					);
				}
			}

			// Segundo passo: processa as expressões dependentes
			for (const [key, value] of Object.entries(rawScope)) {
				if (typeof value === 'string') {
					// Check if it's a helper method call
					const methodMatch = value.match(/(\w+)\((.*)\)/);

					if (methodMatch && helperMethods[methodMatch[1]]) {
						// console.log(value);
						const methodName = methodMatch[1];
						const expression = methodMatch[2].replace(/\|([a-zA-Z]\w*)\|/g, (match, varName) => {
							if (this.generatedValues[varName] === undefined) {
								throw new Error(`Variable ${varName} referenced before definition`);
							}
							return this.generatedValues[varName].toString();
						});

						const evalResult = math.evaluate(expression);
						const result = helperMethods[methodName](evalResult);

						// Store both numerator and denominator
						this.generatedValues[`${key}n`] = result.n;
						this.generatedValues[`${key}d`] = result.d;
						this.generatedValues[`${key}s`] = result.s;

						// Store the decimal value in the original key
						this.generatedValues[key] = evalResult;

						scope[key] = {
							min: evalResult,
							max: evalResult,
							round: 0,
							notNull: false
						};
					} else {
						// console.log(value);
						// ...existing expression handling...
						const expression = value.replace(/\|([a-zA-Z]\w*)\|/g, (match, varName) => {
							if (this.generatedValues[varName] === undefined) {
								throw new Error(`Variable ${varName} referenced before definition`);
							}
							return this.generatedValues[varName].toString();
						});

						const result = math.evaluate(expression);
						this.generatedValues[key] = typeof result === 'number' ? result : math.number(result);

						scope[key] = {
							min: this.generatedValues[key],
							max: this.generatedValues[key],
							round: 0,
							notNull: false
						};
					}
				}
			}

			return scope;
		} catch (e) {
			console.log(e);
			throw new Error('Invalid scope format');
		}
	}

	private getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	private getRandomNum = (
		min: number,
		max: number,
		round?: number,
		type?: string,
		notNull?: boolean
	) => {
		let numb: number;

		do {
			numb = Math.random() * (max - min) + min;

			if (round !== undefined) {
				numb = +numb.toFixed(round);
			}

			if (type === 'even') {
				numb = numb % 2 === 0 ? numb : numb + 1;
			} else if (type === 'odd') {
				numb = numb % 2 === 0 ? numb + 1 : numb;
			}
		} while (notNull && numb === 0); // Se notNull for true, garante que numb ≠ 0

		return numb;
	};

	private generateValue(varName: string, variable: Variable): number {
		// Se já existe um valor gerado, retorna ele
		if (this.generatedValues[varName] !== undefined) {
			return this.generatedValues[varName];
		}

		// Gera um novo valor
		const value = this.getRandomNum(
			variable.min,
			variable.max,
			variable.round,
			variable.type,
			variable.notNull
		);

		// Armazena o valor gerado
		this.generatedValues[varName] = value; //finalValue;
		return value; //finalValue;
	}

	private formatExpression(exp: string): string {
		return exp

			.replace(/(?<!^)\s+(\d+)/g, ' + $1')
			.replace(/\b1(?=x(?:\^|[^0-9]))/g, '')

			.replace(/\s*-\s*(\d+)/g, ' - $1')
			.replace(/\s*=\s*[+]?\s*(\d+)/g, ' = $1')
			.replace(/\s*<\s*[+]?\s*(\d+)/g, ' < $1')
			.replace(/\s*>\s*[+]?\s*(\d+)/g, ' > $1')
			.replace(/\s*\\leftrightarrow\s*[+]?\s*(\d+)/g, ' \\leftrightarrow $1')
			.replace(/\s+/g, ' ')
			.trim();
	}

	parse(expression: string): string {
		let result = expression.replace(/\s+/g, ' ').trim();
		//const varPattern = /\|([a-z])\|/g;
		const varPattern = /\|([a-zA-Z]\w*)\|/g;
		//console.log(varPattern);
		result = result.replace(varPattern, (match, varName) => {
			if (!this.scope[varName]) {
				throw new Error(`Variable ${varName} not found in scope`);
			}

			// Check if this variable has fraction components
			if (
				this.generatedValues[`${varName}n`] !== undefined &&
				this.generatedValues[`${varName}d`] !== undefined
			) {
				const numerator = this.generatedValues[`${varName}n`];
				const denominator = this.generatedValues[`${varName}d`];
				const signal = this.generatedValues[`${varName}s`];

				// If denominator is 1, return just the number with sign
				if (denominator === 1) {
					// console.log(signal + numerator);
					return (signal + numerator).toString();
				}

				// Otherwise return LaTeX fraction with sign outside
				//console.log(`${signal}\\frac{${numerator}}{${denominator}}`);
				let res;
				if (numerator > 9 || denominator > 9) {
					res = `${signal}\\frac{${numerator}}{${denominator}}`;
				} else {
					res = `${signal}\\frac${numerator}${denominator}`;
				}
				return res;
			}

			// Regular variable handling
			const value = this.generateValue(varName, this.scope[varName]);
			//console.log(value, varName);
			return value.toString();
		});

		// console.log(result);
		return this.formatExpression(result);
	}

	// Método para resetar os valores gerados
	reset(): void {
		this.generatedValues = {};
	}
}
