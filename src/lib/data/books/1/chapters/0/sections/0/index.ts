import type { Section } from '$lib/types/Section';

export default {
	id: '38241359-998d-468e-ba52-1d603da17bfc',
	title: 'Sequências',
	quests: [
		{
			id: 'b324f603-b237-452a-bed6-ca8bcf659dd2',
			tips: ``,
			questType: 'MultipleChoice',
			command: 'Descubra qual é o próximo elemento de cada sequência',
			quantity: 10,
			questData: [
				{
					correctAnswer: [{ type: 'string', content: '➡️' }],
					body: [{ type: 'string', content: '⬇️ ⬅️ ⬆️ ➡️ ⬇️ ⬅️ ⬆️ ➡️ ⬇️ ⬅️ ⬆️' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '➡️' },
						{ type: 'string', content: '⬆️' },
						{ type: 'string', content: '⬇️' },
						{ type: 'string', content: '⬅️' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '➡️' }],
					body: [{ type: 'string', content: '⬇️ ⬅️ ⬇️ ➡️ ⬇️ ⬅️ ⬇️ ➡️ ⬇️ ⬅️ ⬇️' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '➡️' },
						{ type: 'string', content: '⬆️' },
						{ type: 'string', content: '⬇️' },
						{ type: 'string', content: '⬅️' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '➡️ ⬅️' }],
					body: [{ type: 'string', content: '⬅️ ➡️ ⬅️ ➡️ ⬅️ ➡️ ⬅️ ➡️ ⬅️ ➡️ ⬅️' }],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '➡️ ⬅️' },
						{ type: 'string', content: '➡️ ➡️' },
						{ type: 'string', content: '⬅️ ➡️' },
						{ type: 'string', content: '⬅️ ⬅️' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '➡️' }],
					body: [{ type: 'string', content: '⬅️ ➡️ ⬅️ ➡️ ⬅️ ➡️ ⬅️ ➡️ ⬅️ ➡️ ⬅️' }],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '➡️' },
						{ type: 'string', content: '⬆️' },
						{ type: 'string', content: '⬇️' },
						{ type: 'string', content: '⬅️' }
					]
				}, //⚾ ❇️ 🧿 🎲 🥎 ⚽ 🏀 🏐 🏈
				{
					correctAnswer: [{ type: 'string', content: '🏀 🏀' }],
					body: [{ type: 'string', content: '🏀 ⚽ 🏀 🏀 ⚽ 🏀 🏀 🏀 ⚽ 🏀' }],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '🏀 ⚽' },
						{ type: 'string', content: '⚽ 🏀' },
						{ type: 'string', content: '🏀 🏀' },
						{ type: 'string', content: '⚽ ⚽' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '🏀 🏀 ⚽' }],
					body: [{ type: 'string', content: '🏀 🏀 🏀 🏀 ⚽ ⚽ ⚽ 🏀 🏀 🏀 ⚽ ⚽' }],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '🏀 🏀 🏀' },
						{ type: 'string', content: '🏀 🏀 ⚽' },
						{ type: 'string', content: '🏀 ⚽ 🏀' },
						{ type: 'string', content: '🏀 ⚽ ⚽' },
						{ type: 'string', content: '⚽ 🏀 🏀' },
						{ type: 'string', content: '⚽ 🏀 ⚽' },
						{ type: 'string', content: '⚽ ⚽ 🏀' },
						{ type: 'string', content: '⚽ ⚽ ⚽' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '⚽ 🏀' }],
					body: [{ type: 'string', content: '🏀 🏀 ⚽ ⚽ 🏀 🏀 ⚽' }],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '🏀 ⚽' },
						{ type: 'string', content: '⚽ 🏀' },
						{ type: 'string', content: '🏀 🏀' },
						{ type: 'string', content: '⚽ ⚽' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '⚽ ⚽' }],
					body: [{ type: 'string', content: '🏀 🏀 🏀 ⚽ ⚽ ⚽ 🏀 🏀 🏀 ⚽' }],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '🏀 ⚽' },
						{ type: 'string', content: '⚽ 🏀' },
						{ type: 'string', content: '🏀 🏀' },
						{ type: 'string', content: '⚽ ⚽' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '⚽ ⚽' }],
					body: [
						{
							type: 'string',
							content: '🏀 ⚽ ⚽ 🏀 🏀 🏀 ⚽ 🏀 🏀 ⚽ ⚽ ⚽ 🏀 ⚽ ⚽ 🏀 🏀 🏀 ⚽ 🏀 🏀 ⚽ ⚽ ⚽ 🏀'
						}
					],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '🏀 ⚽' },
						{ type: 'string', content: '⚽ 🏀' },
						{ type: 'string', content: '🏀 🏀' },
						{ type: 'string', content: '⚽ ⚽' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: '🏀 ⚽' }],
					body: [
						{
							type: 'string',
							content: '🏀 ⚽ ⚽ 🏀 🏀 🏀 ⚽ 🏀 🏀 ⚽ ⚽ ⚽ 🏀 ⚽ ⚽ 🏀 🏀 🏀 ⚽ 🏀 🏀 ⚽ ⚽ ⚽'
						}
					],
					scope: '{}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: '🏀 ⚽' },
						{ type: 'string', content: '⚽ 🏀' },
						{ type: 'string', content: '🏀 🏀' },
						{ type: 'string', content: '⚽ ⚽' }
					]
				}
			],
			instructions: `
                        Sequência é uma lista ordenada de números ou figuras, 
						em que há um padrão que indica como os elementos vão se suceder.
						<br>
						<br>
						Exemplos
						<br>
			
						<li>Sequência dos números naturais:</li>
						$$\\quad$$0, 1, 2, 3, 4, 5, 6, 7, 8, ...
						<br>
						<li>Sequência dos números naturais ímpares:</li>
						$$\\quad$$1, 3, 5, 7, 9, 11, 13, 15, 17, ...
						<br>
						<li>Sequência das estações do ano:</li>
						$$\\quad$$Primavera, verão, outono, inverno, primavera, verão, outono, ...
						<br>
						<li>Sequência dos meses do ano:</li>
						$$\\quad$$Janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro,
						novembro, dezembro, janeiro, fevereiro, ...</li>
						<br>
						<br>
						Esta é uma sequência de figuras.
						<br>
						♦️ ♥️ ♦️ ♥️ ♦️ ♥️
                        `
		}
		// {
		// 	id: 'a2f83eba-40a5-4bf1-8492-07053d2d1cff',
		// 	tips: ``,
		// 	questType: 'MathInput',
		// 	command: 'Complete as lacunas das sequências numéricas a seguir.',
		// 	quantity: 4,
		// 	questData: [
		// 		{
		// 			correctAnswer: [
		// 				{
		// 					type: 'latex',
		// 					content: 'índice:2;radical:\\sqrt{|radicand|};radicando:|radicand|;raiz:|base|'
		// 				}
		// 			],
		// 			body: [
		// 				{
		// 					type: 'latex',
		// 					content: '\\sqrt{|radicand|} = |base|'
		// 				}
		// 			],
		// 			scope: '{\n"base":{"min":10,"max":100,"round":0,"notNull":true},\n"radicand":"|base|^2"}',

		// 			userAnswerPlaceholder:
		// 				'índice:\\placeholder{};radical:\\placeholder{};radicando:\\placeholder{};raiz:\\placeholder{}'
		// 		},
		// 		{
		// 			correctAnswer: [
		// 				{
		// 					type: 'latex',
		// 					content:
		// 						'índice:|index|;radical:\\sqrt[|index|]{|radicand|};radicando:|radicand|;raiz:|base|'
		// 				}
		// 			],
		// 			body: [
		// 				{
		// 					type: 'latex',
		// 					content: '\\sqrt[|index|]{|radicand|} = |base|'
		// 				}
		// 			],
		// 			scope:
		// 				'{\n"base":{"min":1,"max":5,"round":0,"notNull":true},\n"index":{"min":3,"max":5,"round":0,"notNull":true},\n"radicand":"|base|^|index|"}',

		// 			userAnswerPlaceholder:
		// 				'índice:\\placeholder{};radical:\\placeholder{};radicando:\\placeholder{};raiz:\\placeholder{}'
		// 		}
		// 	],
		// 	instructions: ``
		// }
	]
} as Section;
