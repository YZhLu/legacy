/* eslint-disable @typescript-eslint/no-explicit-any */
//exportar o json com os dados dos capítulos e sections
export const data = {
	books: [
		{
			id: 'efe7db13-4f57-4b08-bfa9-a33e8106aa9d',
			title: 'IV',
			chapters: [
				{
					id: 'e5107f62-7c81-4b5b-b3a3-20b03b4efe42',
					title: 'RADICIAÇÃO',
					sections: [
						{
							title: 'Raiz enésima de um número real',
							quests: [
								{
									instructions:
										'Sendo <strong>a</strong> e <strong>b</strong> números reais e <strong>n</strong> natural e diferente de zero, define-se:<br/> <sup>n</sup>√a = b &harr; b<sup>n</sup> = a',
									tips: '',
									comand: '',
									questData: [],
									quantity: 4
								},
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 3 },
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 8 },
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 10 },
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 12 },
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 5 },
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 7 },
								{ instructions: '', questData: [], comand: '', tips: '', quantity: 7 }
							]
						},
						{ title: 'Simplificação de radicais', quests: [] },
						{ title: 'Como inserir um fator em um radical', quests: [] },
						{ title: 'Como reduzir radicais ao mesmo índice', quests: [] },
						{ title: 'Radicais semelhantes', quests: [] }
					],
					questsCount: 17
				},
				{
					title: 'OPERAÇÕES COM RADICAIS',
					sections: [
						{ title: 'Adição e subtração de radicais', quests: [] },
						{ title: 'Multiplicação e divisão de radicais', quests: [] },
						{ title: 'Potenciação de radicais', quests: [] },
						{ title: 'Radiciação de radicais', quests: [] },
						{ title: 'Racionalização de denominadores', quests: [] },
						{ title: 'Extração da raiz quadrada', quests: [] }
					],
					questsCount: 13
				},
				{
					title: 'EQUAÇÕES DO 2° GRAU',
					sections: [
						{
							title: '',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: 'a = |a|; b = |b|; c = |c|'
										}
									],
									comand: 'Determine os valores dos coeficientes a, b e c destas equações.',
									tips: '',
									quantity: 5
								}
							]
						},
						{
							title: 'Equações do 2° grau incompletas',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: 'a = |a|; b = |b|; c = |c|',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: '|a|x^2  |b|x  |c| = 0'
										},
										{
											body: 'a = |a|; b = |b|; c = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: '|a|x^2  |b|x = 0'
										},
										{
											body: 'a = |a|; b = 0; c = |c|',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: '|a|x^2  |c| = 0'
										},
										{
											body: 'a = 0; b = |b|; c = |c|',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: '|b|x |c| = 0'
										}
									],
									comand:
										'Dados os valores dos coeficientes a, b e c, determine as equações do 2º grau com incógnita x.',
									tips: '',
									quantity: 7
								}
							]
						},
						{
							title: 'Resolução de equações do 2° grau incompletas em R',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 = 0',
											userAnswerPlaceholder: '',
											scope: '{\n"a":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: 'S=\\left\\lbrace0\\right\\rbrace'
										},
										{
											body: '|a|x^2 |b|x = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":"formatToLatexFraction(fraction((|b|/|a|)*(-1)))"}',
											ans: 'S=\\left\\lbrace0,|c|\\right\\rbrace'
										}
									],
									comand: 'Determine o conjunto solução das equações, sendo U = R.',
									tips: '',
									quantity: 14
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 = 0',
											userAnswerPlaceholder: '',
											scope: '{\n"a":{"min":-20, "max":20, "round":0, "notNull":true}}',
											ans: 'S=\\left\\lbrace0\\right\\rbrace'
										},
										{
											body: 'x^2 |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x":{"min":-10, "max":-2, "round":0, "notNull":true}, "c":"|x|*|x|", "a":"|x|*(-1)"}',
											ans: [
												'S=\\left\\lbrace|x|,|a|\\right\\rbrace',
												'S=\\left\\lbrace|a|,|x|\\right\\rbrace'
											]
										},
										{
											body: 'x^2 |c| = 0',
											userAnswerPlaceholder: '',
											scope: '{\n"c":{"min":1, "max":100, "round":0, "notNull":true}}',
											ans: 'S=\\left\\lbrace\\right\\rbrace'
										}
									],
									comand: 'Resolva as equações do 2º grau, sendo U = R:',
									tips: '',
									quantity: 10
								}
							]
						},
						{
							title: 'Resolução de equações do 2° grau completas em R',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"formatToLatexFraction(fraction((1/|a|)))",\n"b":"(|x1|+(1/|a|))*(|a|*(-1))",\n"c":"(|x1|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										}
									],
									comand: 'Resolva as equações do 2º grau em R.',
									tips: '',
									quantity: 4
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										// {
										// 	body: '|a|x^2  |b|x  |c| = 0',
										// 	scope:
										// 		'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"formatToLatexFraction(fraction((1/|a|)))",\n"b":"(|x1|+(1/|a|))*(|a|*(-1))",\n"c":"(|x1|)"}',
										// 	ans: [
										// 		'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
										// 		'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
										// 	]
										// },
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":{"min":-10, "max":10, "round":0, "notNull":true},\n"c":"(|b|*|b|)"}',
											ans: ['S=\\left\\lbrace\\right\\rbrace']
										},
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"|x1|",\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: ['S=\\left\\lbrace|x1|\\right\\rbrace']
										},
										{
											body: '|a|x^2  |b|x + |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x":{"min":6, "max":10, "round":0, "notNull":true},\n"a":{"min":1, "max":5, "round":0, "notNull":true},\n"x2":"formatToLatexFraction(fraction((1/|a|)))",\n"x1":"formatToLatexFraction(fraction((1/|x|)))",\n"b":"formatToLatexFraction(((1/|x|)+(1/|a|))*(|a|*(-1)))",\n"c":"formatToLatexFraction(fraction(1/|x|))"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										}
									],
									comand: 'Resolva as equações do 2º grau em R.',
									tips: '',
									quantity: 17
								},
								{
									instructions: '',
									questData: [
										// {
										// 	body: '|a|x^2  |b|x  |c| = {(|a0|x |c0|)}^2 = |x1|, |x0|',
										// 	// body:"|x| LLL |z|",
										// 	scope:
										// 	'{\n"a0":{"min":-3, "max":3, "round":0, "notNull":true},\n"a":"|a0|*|a0|",\n"x0":{"min":1, "max":4, "round":0, "notNull":true},\n"x1":"|x0|*|x0|",\n"b":"(|x1|+|x1|)*(-1)*|a|",\n"c":"(|x1|*|x1|*|a|)",\n"c0":"(|x0|*|x0|*|a0|*(-1))"}',

										// 		// '{\n"a1":{"min":2, "max":5, "round":0, "notNull":true},{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":"|a1|*|a1|",\n"b":"((|x1|*|x1|)+(|x2|*|x2|))*(|a|*(-1))",\n"c":"(|x1|*|x1|*|x2|*|x2|)*(|a|)",\n"c1":"(|x1|*|x2|)*(|a1|)"}',
										// 	ans: [
										// 		// 'S=\\left\\lbrace|x1|*|x1|,|x2|*|x2|\\right\\rbrace',
										// 		'S=\\left\\lbrace|x1|\\right\\rbrace'
										// 	]
										// },
										/* // --> */
										{
											body: '{(|a|x |c|)}^2 = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-9, "max":9, "round":0, "notNull":true},\n"c":{"min":-9, "max":9, "round":0, "notNull":true},\n"s":"formatToLatexFraction(|c|/|a|*(-1))"}',
											ans: [
												// 'S=\\left\\lbrace|x1|*|x1|,|x2|*|x2|\\right\\rbrace',
												'S=\\left\\lbrace|s|\\right\\rbrace'
											]
										},
										{
											body: '{(|a|x |c|)}^2 = |x|x^2',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":1, "max":9, "round":0, "notNull":true},\n"c":{"min":-9, "max":9, "round":0, "notNull":true},\n"x":{"min":-9, "max":-1, "round":0, "notNull":true}}',
											ans: [
												// 'S=\\left\\lbrace|x1|*|x1|,|x2|*|x2|\\right\\rbrace',
												'S=\\left\\lbrace\\right\\rbrace'
											]
										},
										{
											body: 'x(|a|x |b|) = |cneg|',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"cneg":"|c|*(-1)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: '|alpha|x^2 + x = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"0",\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"alpha":"formatToLatexFraction(|a|/|b|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: '\\frac{|c|}{x^2} =  \\frac{|beta|}{x} |alpha| ~ (x \\ne ~0)',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"alpha":"(-1)*(|a|)",\n"beta":"(-1)*(|b|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: '|a|x^2 |b|x |cprime| = |d|',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"d":{"min":-9, "max":9, "round":0, "notNull":true},\n"cprime":"(|c|+|d|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: 'x(2x - x) = |beta|x |cprime|',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":"1",\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"beta":"(-1)*|b|",\n"cprime":"(|c|*(-1))"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: '(x |a|)(x |x|) = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x":{"min":-100, "max":-2, "round":0, "notNull":true}, "a":"|x|*(-1)"}',
											ans: [
												'S=\\left\\lbrace|x|,|a|\\right\\rbrace',
												'S=\\left\\lbrace|a|,|x|\\right\\rbrace'
											]
										},
										{
											body: '\\frac{|a|x^2 |b|x}{|d|} = \\frac{|cprime|}{|dprime|}',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true, "type":"even"},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"d":{"min":4, "max":9, "round":0, "notNull":true, "type":"even"},\n"cprime":"(|c|/(-2))",\n"dprime":"(|d|/2)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										},
										{
											body: '\\frac{x^2}{|b|} + \\frac{x}{|a|} = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":2, "max":20, "round":0, "notNull":true},\n"b":{"min":2, "max":20, "round":0, "notNull":true},\n"c":"formatToLatexFraction(fraction((|b|/|a|)*(-1)))"}',
											ans: 'S=\\left\\lbrace0,|c|\\right\\rbrace'
										},
										{
											body: '|a|x^2 |b|x |cprime| = |d| = (x |x1prime|)(x |x2prime|)',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-9, "max":-1, "round":0, "notNull":true},\n"x2":{"min":1, "max":9, "round":0, "notNull":true},\n"a":"1",\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"z":{"min":1, "max":4, "round":0, "notNull":true},\n"x1prime":"(|x1|*(-1)-|z|)",\n"x2prime":"(|x2|*(-1))+|z|",\n"cprime":"(|x1prime|*|x2prime|)",\n"d":"(|c|*(-1)+|cprime|)"}',
											ans: [
												'S=\\left\\lbrace|x1|,|x2|\\right\\rbrace',
												'S=\\left\\lbrace|x2|,|x1|\\right\\rbrace'
											]
										}
									],
									comand: 'Resolva as equações em R.',
									tips: '',
									quantity: 15
								}
							]
						},
						{
							title: 'Discussão quanto às raízes de uma equação do 2° grau',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: ['Admite~duas~raízes~reais~e~diferentes.']
										},
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":{"min":-10, "max":10, "round":0, "notNull":true},\n"c":"(|b|*|b|)"}',
											ans: ['Não~admite~nenhuma~raiz~real.']
										},
										{
											body: '|a|x^2  |b|x  |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"|x1|",\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: ['Admite~duas~raízes~reais~e~iguais.']
										}
									],
									comand:
										'Calcule apenas o ∆ e responda se a equação admite: duas raízes reais e diferentes, duas raízes reais e iguais ou não admite nenhuma raiz real.',
									tips: '',
									quantity: 8
								}
							]
						},
						{
							title: 'Como determinar os coeficientes de uma equação do 2° grau',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x 2m = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"(|b|*|b|)/(|a|*8)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['m<|s|']
										}
									],
									comand:
										'Para que valores de m a equação abaixo possui duas raízes reais e diferentes?',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  2m = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"(|b|*|b|)/(|a|*8)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['m<|s|']
										}
									],
									comand:
										'Para que valores de m a equação abaixo possui duas raízes reais e diferentes?',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x |f|k = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['k<|s|']
										}
									],
									comand:
										'Calcule o valor de k na equação abaixo, para que ela admita duas raízes reais e diferentes.',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  |f|m = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['m=|s|']
										}
									],
									comand:
										'Para que valores de m a equação abaixo possui duas raízes reais e iguais?',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x |f|p = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['p=|s|']
										}
									],
									comand:
										'Calcule o valor de p a equação abaixo para que ela admita duas raízes reais e iguais.',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  + (k |f|) = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['k=|s|']
										}
									],
									comand:
										'Para que valores de k a equação abaixo admite duas raízes reais e iguais?',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  + (m |f|) = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['m>|s|']
										}
									],
									comand: 'Para que valores de m a equação abaixo não admite nenhuma raiz real?',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  |f|k = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['k>|s|']
										}
									],
									comand:
										'Calcule o valor de k na equação abaixo para que ela não admita nenhuma raiz real.',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x - p = 0',
											scope:
												'{\n"x1":{"min":-10, "max":-6, "round":0, "notNull":true},\n"x2":{"min":1, "max":5, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"(|b|*|b|)/(-|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['a)p<|s|;b)m=|s|;c)m>|s|.'],
											userAnswerPlaceholder:
												'a)\\placeholder{};b)\\placeholder{};c)\\placeholder{}.'
										}
									],
									comand:
										'Calcule o valor de p para que a equação abaixo: a) não admita nenhuma raiz real; b) admita duas raízes reais e iguais; c) admita duas raízes reais e desiguais.',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x + (m |f|) = 0',
											scope:
												'{\n"x1":{"min":-10, "max":-6, "round":0, "notNull":true},\n"x2":{"min":1, "max":5, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":(|x1|+|x2|)*(|a|*(-1))3",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['a)m=|s|;b)m<|s|;c)m>|s|.'],
											userAnswerPlaceholder:
												'a)\\placeholder{};b)\\placeholder{};c)\\placeholder{}.'
										}
									],
									comand:
										'Calcule o valor de m para que a equação abaixo: a) admita duas raízes reais e iguais; b) admita duas raízes reais e diferentes; c) não admita nenhuma raiz real.',
									tips: '',
									quantity: 1
								}
							]
						},
						{
							title: 'Relações entre coeficientes e raízes de uma equação do 2° grau',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x |c| = 0',
											userAnswerPlaceholder: 'S=\\placeholder{};P=\\placeholder{}.',
											scope:
												'{\n"x1":{"min":-3, "max":3, "round":0},\n"x2":{"min":-3, "max":3, "round":0},\n"a":{"min":-3, "max":3, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
											ans: ['S=|s|;P=|p|.']
										}
									],
									comand:
										'Determine a soma S e o produto P das raízes das equações, sem resolvê-las:',
									tips: '',
									quantity: 12
								}
							]
						},
						{
							title: 'Formando uma equação do 2° grau a partir de suas raízes',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|x1|~e~|x2|',
											userAnswerPlaceholder: 'x^2\\placeholder{}x\\placeholder{} = 0',
											scope:
												'{\n"x1":{"min":-3, "max":3, "round":0},\n"x2":{"min":-3, "max":3, "round":0},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
											ans: ['|a|x^2 |b|x |c| = 0']
										}
									],
									comand: 'Compor as equações do 2o grau (com a = 1) que têm por raízes:',
									tips: '',
									quantity: 12
								},
								{
									instructions: '',
									questData: [
										{
											body: '|s|~e~|p|',
											userAnswerPlaceholder: '\\placeholder{}~e~\\placeholder{}',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":{"min":-10, "max":10, "round":0},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
											ans: ['|x1|~e~|x2|']
										}
									],
									comand: 'Ache dois números cuja soma e o produto sejam respectivamente:',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|s|~e~|p|',
											userAnswerPlaceholder: '\\placeholder{}~e~\\placeholder{}',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":{"min":-10, "max":10, "round":0},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
											ans: ['|x1|~e~|x2|']
										}
									],
									comand: 'Ache dois números cuja soma e o produto sejam respectivamente:',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|s|~e~|p|',
											userAnswerPlaceholder: '\\placeholder{}~e~\\placeholder{}',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":{"min":-10, "max":10, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
											ans: ['|x1|~e~|x2|']
										}
									],
									comand: 'Ache dois números cuja soma e o produto sejam respectivamente:',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 |b|x |m|m = 0,~de~modo~que~uma~raiz~seja~igual~a~|x1|',
											scope:
												'{\n"x1":{"min":-10, "max":-6, "round":0, "notNull":true},\n"x2":{"min":-1, "max":-5, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"-|x1|",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['|x2|'],
											userAnswerPlaceholder: ''
										}
									],
									comand: 'Calcule m na equação',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2  |b|x  + (k |f|) = 0,~para~que~ela~tenha~duas~raízes~reais~e~iguais.',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
											ans: ['|s|']
										}
									],
									comand: 'Determine o valor de k na equação',
									tips: '',
									quantity: 1
								}
							]
						},
						{
							title: 'Raízes simétricas',
							quests: [
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 + (p |x1|)x |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"-|x1|",\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: ['|x2|']
										}
									],
									comand: 'Determine p na equação para que as raízes sejam simétricas.',
									tips: '',
									quantity: 1
								},
								{
									instructions: '',
									questData: [
										{
											body: '|a|x^2 - (p |x1|)x |c| = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"-|x1|",\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
											ans: ['|x2|']
										}
									],
									comand: 'Determine p na equação para que as raízes sejam simétricas.',
									tips: '',
									quantity: 1
								}
							]
						}
					],
					questsCount: 27
				},
				{
					title: 'EQUAÇÕES BIQUADRADAS E EQUAÇÕES IRRACIONAIS',
					sections: [
						{ title: 'Equações biquadradas', quests: [] },
						{ title: 'Equações irracionais', quests: [] }
					],
					questsCount: 3
				},
				{
					title: 'SISTEMAS DE EQUAÇÕES',
					sections: [{ title: 'Solução de um sistema de equações', quests: [] }],
					questsCount: 6
				},
				{
					title: 'FUNÇÕES',
					sections: [
						{ title: 'Produto cartesiano', quests: [] },
						{ title: 'Relação binária', quests: [] },
						{ title: 'Função', quests: [] },
						{ title: 'Valor numérico de uma função polinomial de R em R', quests: [] },
						{ title: 'Função polinomial do 1° grau', quests: [] },
						{ title: 'Função quadrática', quests: [] }
					],
					questsCount: 12
				},
				{
					title: 'INEQUAÇÕES DO 2° GRAU',
					sections: [{ title: 'Resoluções de inequações do 2° grau', quests: [] }],
					questsCount: 1
				},
				{
					title: 'SEMELHANÇA DE TRIÂNGULOS',
					sections: [
						{ title: 'Razão entre segmentos', quests: [] },
						{ title: 'Teorema de Tales', quests: [] },
						{ title: 'Triângulos semelhantes', quests: [] }
					],
					questsCount: 6
				},
				{
					title: 'TRIÂNGULO RETÂNGULO',
					sections: [
						{ title: 'Relações métricas no triângulo retângulo', quests: [] },
						{ title: 'Aplicações do teorema de Pitágoras', quests: [] },
						{ title: 'Relações trigonométricas no triângulo retângulo', quests: [] }
					],
					questsCount: 17
				},
				{
					title: 'RELAÇÕES MÉTRICAS EM UM TRIÂNGULO QUALQUER',
					sections: [
						{ title: 'Relações métricas', quests: [] },
						{ title: 'Classificação de um triângulo quanto aos ângulos', quests: [] }
					],
					questsCount: 3
				},
				{
					title: 'CIRCUNFERÊNCIA E POLÍGONOS REGULARES',
					sections: [
						{ title: 'Relações métricas na circunferência', quests: [] },
						{ title: 'Relações métricas nos polígonos regulares', quests: [] },
						{ title: 'Áreas de figuras geométricas planas', quests: [] }
					],
					questsCount: 24
				}
			]
		}
	]
};

function addUUIDsToData(data: any): any {
    // Create deep copy of data
    const copy = JSON.parse(JSON.stringify(data));

    // Recursive function to process the data structure
    function processObject(obj: any): any {
        if (Array.isArray(obj)) {
            return obj.map(item => processObject(item));
        } else if (typeof obj === 'object' && obj !== null) {
            const newObj: any = {};
            
            for (const [key, value] of Object.entries(obj)) {
                if (key === 'quests' && Array.isArray(value)) {
                    // Add id to each quest object
                    newObj[key] = value.map(quest => ({
                        id: crypto.randomUUID(),
                        ...quest
                    }));
                } else if (key === 'chapters' && Array.isArray(value)) {
                    // Add id to each chapter object if it doesn't already have one
                    newObj[key] = value.map(chapter => ({
                        id: chapter.id || crypto.randomUUID(),
                        ...processObject(chapter)
                    }));
                } else if (key === 'sections' && Array.isArray(value)) {
                    // Add id to each section object
                    newObj[key] = value.map(section => ({
                        id: crypto.randomUUID(),
                        ...processObject(section)
                    }));
                } else if (typeof value === 'object' && value !== null) {
                    newObj[key] = processObject(value);
                } else {
                    newObj[key] = value;
                }
            }
            return newObj;
        }
        return obj;
    }

    return processObject(copy);
}
// Usage:
const questDataWithIds = addUUIDsToData(data);
console.log(questDataWithIds);
export { questDataWithIds as questData };
