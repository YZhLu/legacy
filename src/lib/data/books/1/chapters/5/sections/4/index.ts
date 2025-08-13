import type { Section } from "$lib/types/Section";

export default {
	id: 'b7bc1c51-f364-4f55-a34c-6e06e717e183',
	title: 'Função polinomial do 1° grau',
	quests: [
		{
			id: '5ecdd6b3-da82-4946-83e8-5543afc11871',
			tips: ``,
			questType: 'Graph',
			command: 'Complete a tabela e construa o gráfico das funções polinomiais do 1º grau.',
			quantity: 4,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '0;|y_0|;(0,|y_0|)'
						},
						{
							type: 'latex',
							content: '1;|y_1|;(1,|y_1|)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = ~|a|x |b|'
						}
					],
					scope: `{
										\n"a":{"min":-3, "max":3, "round":0, "notNull":true},
										\n"b":{"min":-1, "max":4, "round":0, "notNull":false},
										\n"y_0": "|b|",
										\n"y_1": "|a| + |b|"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' }
					]
				}
			],
			instructions: ``
		},
		{
			id: '259270e5-dbd9-48f5-aaae-db6c1627c473',
			tips: ``,
			questType: 'Graph',
			command: 'Complete a tabela e construa o gráfico das funções polinomiais do 1º grau.',
			quantity: 4,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '0;|y_0|;(0,|y_0|)'
						},
						{
							type: 'latex',
							content: '1;|y_1|;(1,|y_1|)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = ~|a|x |b|'
						}
					],
					scope: `{
										\n"a":{"min":-3, "max":1, "round":0, "notNull":true},
										\n"b":{"min":0, "max":3, "round":0, "notNull":false},
										\n"y_0": "|b|",
										\n"y_1": "|a| + |b|"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' }
					]
				}
			],
			instructions: ``
		}
	]
} as Section;
