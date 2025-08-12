export const questData = {
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
							id: 'eed24b37-a9f0-4f5b-aae9-5c05a9fb180c',
							title: 'Raiz enésima de um número real',
							quests: [
								{
									id: '04439baf-a054-4043-af44-239176d56c58',
									instructions:
										'Sendo <strong>a</strong> e <strong>b</strong> números reais e <strong>n</strong> natural e diferente de zero, define-se:<br/> <sup>n</sup>√a = b &harr; b<sup>n</sup> = a',
									tips: '',
									comand: '',
									questData: [],
									quantity: 4
								},
								{
									id: 'fbd51ec5-d9b9-4f6d-b10d-3a399400a546',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 3
								},
								{
									id: '879864dc-c45d-4227-9585-954df70ebac5',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 8
								},
								{
									id: 'cb8a7583-4ebd-4605-9110-411fb6ac8977',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 10
								},
								{
									id: 'e9c3ea15-f05c-471b-bd91-2ac1b993dadd',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 12
								},
								{
									id: 'daf905c9-de10-47e7-af72-45e8a732436e',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 5
								},
								{
									id: 'bc794448-0100-4686-94b4-a56fa84eb830',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 7
								},
								{
									id: '7a5e77f3-fe51-43f4-a169-8872abc4a423',
									instructions: '',
									questData: [],
									comand: '',
									tips: '',
									quantity: 7
								}
							]
						},
						{
							id: 'ecea35ab-9a4e-493e-9bed-c06a42a9481f',
							title: 'Simplificação de radicais',
							quests: []
						},
						{
							id: '7bafec23-f32d-4c04-8396-453e909c02fe',
							title: 'Como inserir um fator em um radical',
							quests: []
						},
						{
							id: 'a094761c-2947-42b2-91dd-e40aea94af6b',
							title: 'Como reduzir radicais ao mesmo índice',
							quests: []
						},
						{
							id: 'd9652d3d-08e2-44c0-8d56-1959e6851faf',
							title: 'Radicais semelhantes',
							quests: []
						}
					],
					questsCount: 17
				},
				{
					id: 'd2127c09-1123-4b3e-89dc-37a5f9d14a46',
					title: 'OPERAÇÕES COM RADICAIS',
					sections: [
						{
							id: '17794380-6fc7-4088-ac37-d7841e92212c',
							title: 'Adição e subtração de radicais',
							quests: []
						},
						{
							id: '51477c2d-32e1-402e-908e-6d306f9014a1',
							title: 'Multiplicação e divisão de radicais',
							quests: []
						},
						{
							id: 'ce515ef5-6d60-4bd1-9094-53310a152278',
							title: 'Potenciação de radicais',
							quests: []
						},
						{
							id: '60c91e7b-305a-4aa0-bf76-a105498da39b',
							title: 'Radiciação de radicais',
							quests: []
						},
						{
							id: '83030f0b-2f26-4833-b14e-3fb63b10a2bd',
							title: 'Racionalização de denominadores',
							quests: []
						},
						{
							id: '856ea552-c621-4f74-a0b7-9d973ce2740b',
							title: 'Extração da raiz quadrada',
							quests: []
						}
					],
					questsCount: 13
				},
				{
					id: '3873bc9d-645f-44ed-8337-d9520f64e2cc',
					title: 'EQUAÇÕES DO 2° GRAU',
					sections: [
						{
							id: '9d23250b-f561-4068-ba55-59596330b6cc',
							title: '',
							quests: [
								{
									id: '1da0c785-766e-4d0b-a42e-9929fe6cacf0',
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
							id: '097a5f77-abec-41a1-901a-b13d0df20c40',
							title: 'Equações do 2° grau incompletas',
							quests: [
								{
									id: 'c5f8b325-cb06-4d6a-8a1a-c9d801cc4121',
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
							id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
							title: 'Resolução de equações do 2° grau incompletas em R',
							quests: [
								{
									id: '5f9b0714-123e-400b-9fa2-611c16300d28',
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
									id: '0e51397a-ceb8-44ac-b7d6-87287876fd57',
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
							id: 'ca1216a3-fdc3-46b3-aa17-faa306d3749d',
							title: 'Resolução de equações do 2° grau completas em R',
							quests: [
								{
									id: '8fd9802e-ad4d-4381-b018-ae3e7ac59648',
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
									id: '2e5497f3-8ed2-46c4-8050-1ad385e5f99a',
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
									id: '45348a11-713a-470d-8670-66cd6b0fbae3',
									instructions: '',
									questData: [
										{
											body: '{(|a|x |c|)}^2 = 0',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":-9, "max":9, "round":0, "notNull":true},\n"c":{"min":-9, "max":9, "round":0, "notNull":true},\n"s":"formatToLatexFraction(|c|/|a|*(-1))"}',
											ans: ['S=\\left\\lbrace|s|\\right\\rbrace']
										},
										{
											body: '{(|a|x |c|)}^2 = |x|x^2',
											userAnswerPlaceholder: '',
											scope:
												'{\n"a":{"min":1, "max":9, "round":0, "notNull":true},\n"c":{"min":-9, "max":9, "round":0, "notNull":true},\n"x":{"min":-9, "max":-1, "round":0, "notNull":true}}',
											ans: ['S=\\left\\lbrace\\right\\rbrace']
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
							id: 'c1bb2085-eefe-4810-b8ec-7e00fb995aaf',
							title: 'Discussão quanto às raízes de uma equação do 2° grau',
							quests: [
								{
									id: '597bdb67-00f9-4f05-b1e1-c87d7dc3ee4c',
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
							id: 'c988177c-65cd-435a-ae27-45723569dbe9',
							title: 'Como determinar os coeficientes de uma equação do 2° grau',
							quests: [
								{
									id: 'c1dce0b1-a359-4518-9687-fb35ee4644b9',
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
									id: '3e541ed0-8183-457e-8c0f-7be7efb0fbf6',
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
									id: 'b561c940-6aab-4e9f-88e0-6a4ffbc19ee6',
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
									id: 'e5185e87-9f56-4808-8701-9943b664ca61',
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
									id: '19bef59c-4d0e-48d2-b848-1602d52b6491',
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
									id: '7b2c3020-705c-433b-822a-09ff6b1bd06e',
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
									id: 'fdc52489-55e9-402f-82d5-347034839652',
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
									id: '9dcfe06f-6a4c-49db-bb4b-a3d0d4d13e3c',
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
									id: 'd6ca86ef-9022-4126-9994-58e49b43b5a1',
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
									id: 'a6aa00b9-8a6a-4d74-8831-3e377941068e',
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
							id: '3809b199-10fe-48c9-9c57-7d06b1e26861',
							title: 'Relações entre coeficientes e raízes de uma equação do 2° grau',
							quests: [
								{
									id: '89f908a6-f4a1-4598-a4ab-ac5c3c4bd218',
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
							id: '64333e06-7d7b-4f16-8416-36f3308d589c',
							title: 'Formando uma equação do 2° grau a partir de suas raízes',
							quests: [
								{
									id: '127cce10-1667-4443-984c-2ed21f4fcca4',
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
									id: '8aed8a4b-0600-49a8-8ed6-fc210f3a09bc',
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
									id: 'a09eeac7-6f50-4561-905f-43e671219afc',
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
									id: '0f1f4b44-e1e0-4f7f-b453-c1bf76e4e755',
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
									id: 'fb7ebba2-ff75-428f-bd18-b0189982e555',
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
									id: '080b422f-134a-4754-b67f-dc1f364b4975',
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
							id: 'e1a243f4-f724-4e6a-9962-c5d7849df0f5',
							title: 'Raízes simétricas',
							quests: [
								{
									id: 'df75b4fd-7ec7-4e38-a51f-6efd5a08360a',
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
									id: '622f42de-696f-4676-b07a-5d0b69958f85',
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
					id: '348a3328-2178-4550-9528-21d391a44363',
					title: 'EQUAÇÕES BIQUADRADAS E EQUAÇÕES IRRACIONAIS',
					sections: [
						{
							id: '2617e713-e6aa-4335-9a9d-e9ff6a8fccd8',
							title: 'Equações biquadradas',
							quests: []
						},
						{
							id: '3cda5793-6131-463f-81d1-0f5ee931801c',
							title: 'Equações irracionais',
							quests: []
						}
					],
					questsCount: 3
				},
				{
					id: 'a9e3fdc9-516c-4abe-b81b-68a86fb1e757',
					title: 'SISTEMAS DE EQUAÇÕES',
					sections: [
						{
							id: '2e2845d3-70c0-474c-ae2b-bbdc73b195e9',
							title: 'Solução de um sistema de equações',
							quests: []
						}
					],
					questsCount: 6
				},
				{
					id: '132d6e71-7ee4-4dba-a820-727d901465a9',
					title: 'FUNÇÕES',
					sections: [
						{
							id: 'ab5027e3-6bd1-494c-bc20-53e2fe620c56',
							title: 'Produto cartesiano',
							quests: []
						},
						{
							id: '5f45fd1a-5bb3-4610-9d1f-f648ddae7d72',
							title: 'Relação binária',
							quests: []
						},
						{
							id: 'e5260c97-0fc4-46fe-8905-11153655624e',
							title: 'Função',
							quests: []
						},
						{
							id: '1ba230cd-e63e-4668-9399-1dc53dbc0439',
							title: 'Valor numérico de uma função polinomial de R em R',
							quests: []
						},
						{
							id: 'b7bc1c51-f364-4f55-a34c-6e06e717e183',
							title: 'Função polinomial do 1° grau',
							quests: []
						},
						{
							id: '00f220bf-1dc9-4f62-b9a4-c27546158c0f',
							title: 'Função quadrática',
							quests: []
						}
					],
					questsCount: 12
				},
				{
					id: 'a48e79c0-55cc-48a3-b364-a09791be5608',
					title: 'INEQUAÇÕES DO 2° GRAU',
					sections: [
						{
							id: 'b55ec6f7-da63-41c4-85ea-b05b41016cd8',
							title: 'Resoluções de inequações do 2° grau',
							quests: []
						}
					],
					questsCount: 1
				},
				{
					id: '12e59e97-0066-4164-9951-77b81097021b',
					title: 'SEMELHANÇA DE TRIÂNGULOS',
					sections: [
						{
							id: '6bd595d1-43a7-4762-900c-3e70786b7388',
							title: 'Razão entre segmentos',
							quests: []
						},
						{
							id: '165f08ef-758e-47bd-8723-2fd8a4fef5e7',
							title: 'Teorema de Tales',
							quests: []
						},
						{
							id: 'ad51a243-548b-45ca-932c-5dccd2890f5f',
							title: 'Triângulos semelhantes',
							quests: []
						}
					],
					questsCount: 6
				},
				{
					id: '3d62e081-a515-4675-baaf-6b0e260de2e7',
					title: 'TRIÂNGULO RETÂNGULO',
					sections: [
						{
							id: '4056d360-bd61-4bf1-9d3d-761154c55942',
							title: 'Relações métricas no triângulo retângulo',
							quests: []
						},
						{
							id: '13de0c10-670e-4051-b503-a39d1a0530f4',
							title: 'Aplicações do teorema de Pitágoras',
							quests: []
						},
						{
							id: 'd03a6ff6-84b9-4c28-9110-74f8cf9113b3',
							title: 'Relações trigonométricas no triângulo retângulo',
							quests: []
						}
					],
					questsCount: 17
				},
				{
					id: '6c0d9473-5d6b-4cfd-aca9-f866c873c4a3',
					title: 'RELAÇÕES MÉTRICAS EM UM TRIÂNGULO QUALQUER',
					sections: [
						{
							id: '77826e2d-63e3-4b58-b7b3-58db47efb567',
							title: 'Relações métricas',
							quests: []
						},
						{
							id: '86478a50-eebd-459e-b4b1-05b28034bd5e',
							title: 'Classificação de um triângulo quanto aos ângulos',
							quests: []
						}
					],
					questsCount: 3
				},
				{
					id: 'fae0ddd4-168e-4be7-a029-b252ba29b324',
					title: 'CIRCUNFERÊNCIA E POLÍGONOS REGULARES',
					sections: [
						{
							id: 'ab812df0-ca9a-49b8-ada9-a3e8c48d4b9e',
							title: 'Relações métricas na circunferência',
							quests: []
						},
						{
							id: '87d4c0c5-107a-463e-8b9b-436641def0a0',
							title: 'Relações métricas nos polígonos regulares',
							quests: []
						},
						{
							id: '9b5404d5-e839-45c9-a8ab-9ab9f900873b',
							title: 'Áreas de figuras geométricas planas',
							quests: []
						}
					],
					questsCount: 24
				}
			]
		}
	]
};
