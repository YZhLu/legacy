import type { Section } from "$lib/types/Section";

export default {
	id: '00f220bf-1dc9-4f62-b9a4-c27546158c0f',
	title: 'Função quadrática',
	quests: [
		{
			id: '4c98aee0-df97-406a-b785-941dda082235',
			tips: `Vamos construir o gráfico das funções quadrática y = x<sup>2</sup>.
                        <br> <br>
                        • Atribuímos valores reais para x e obtemos os valores correspondentes de y.
                        <br> <br>
                         &nbsp &nbsp y = x<sup>2</sup>  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp (x, y)
                        <br> <br>
                        • para x = -1:
                        <br> <br>
                         &nbsp &nbsp y = -1<sup>2</sup> -> y = 1  &nbsp &nbsp &nbsp  &nbsp (-1, 1)
                        <br> <br>
                        • para x = 0:
                        <br> <br>
                         &nbsp &nbsp y = 0<sup>2</sup> -> y = 0  &nbsp &nbsp &nbsp  &nbsp (0, 0)
                        <br> <br>
                        • para x = 1:
                        <br> <br>
                        &nbsp &nbsp y = 1<sup>2</sup> -> y = 1  &nbsp &nbsp &nbsp  &nbsp  &nbsp (1, 1)
                        <br> <br>
                        • para x = 2:
                        <br> <br>
                        &nbsp &nbsp y = 2<sup>2</sup> -> y = 4  &nbsp &nbsp &nbsp  &nbsp (2, 4)
                        <br> <br>
                        <img src="/table.png" alt="Tabela da função quadrática y = x²" />
                        <br>
                        
                        <img src="/graph.png" alt="Gráfico da função quadrática y = x²" />
                        <br>`,
			questType: 'Graph',
			command: 'Complete a tabela e construa o gráfico das funções quadráticas de R em R.',
			quantity: 5,
			questData: [
				{
					correctAnswer: [
						{
							type: 'string',
							content: '-1;2;(-1,2)'
						},
						{
							type: 'string',
							content: '0;0;(0,0)'
						},
						{
							type: 'string',
							content: '1;2;(1,2)'
						},
						{
							type: 'string',
							content: '2;8;(2,8)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = 2x^2'
						}
					],
					scope:
						'{\n"index":{"min":-10, "max":3, "round":0, "notNull":true},\n"radicand":{"min":4, "max":10, "round":0, "notNull":true}}',
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: '-1,2' },
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' },
						{ type: 'string', content: '2,_' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'string',
							content: '-1;-2;(-1,-2)'
						},
						{
							type: 'string',
							content: '0;0;(0,0)'
						},
						{
							type: 'string',
							content: '1;-2;(1,-2)'
						},
						{
							type: 'string',
							content: '2;-8;(2,-8)'
						},
						{
							type: 'string',
							content: '-2;-8;(-2,-8)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = -2x^2'
						}
					],
					scope:
						'{\n"index":{"min":-10, "max":3, "round":0, "notNull":true},\n"radicand":{"min":4, "max":10, "round":0, "notNull":true}}',
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'string', content: '-1,-2' },
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' },
						{ type: 'string', content: '2,_' },
						{ type: 'string', content: '-2,_' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '-1;|y_n1|;(-1,|y_n1|)'
						},
						{
							type: 'latex',
							content: '0;|y_0|;(0,|y_0|)'
						},
						{
							type: 'latex',
							content: '1;|y_1|;(1,|y_1|)'
						},
						{
							type: 'latex',
							content: '2;|y_2|;(2,|y_2|)'
						},
						{
							type: 'latex',
							content: '-2;|y_n2|;(-2,|y_n2|)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = ~|a|x^2 |b|x |c|'
						}
					],
					scope: `{
										\n"a":{"min":-3, "max":3, "round":0, "notNull":true},
										\n"b":{"min":-4, "max":4, "round":0, "notNull":false},
										\n"c":{"min":-10, "max":10, "round":0, "notNull":false},
										\n"y_n1": "|a|*((-1)^2) + |b|*(-1) + |c|",
										\n"y_0": "|a|*((0)^2) + |b|*(0) + |c|",
										\n"y_1": "|a|*((1)^2) + |b|*(1) + |c|",
										\n"y_2": "|a|*((2)^2) + |b|*(2) + |c|",
										\n"y_n2": "|a|*((-2)^2) + |b|*(-2) + |c|"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'latex', content: '-1,|y_n1|' },
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' },
						{ type: 'string', content: '2,_' },
						{ type: 'string', content: '-2,_' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '-3;|y_n3|;(-3,|y_n3|)'
						},
						{
							type: 'latex',
							content: '-2;|y_n2|;(-2,|y_n2|)'
						},
						{
							type: 'latex',
							content: '-1;|y_n1|;(-1,|y_n1|)'
						},
						{
							type: 'latex',
							content: '0;|y_0|;(0,|y_0|)'
						},
						{
							type: 'latex',
							content: '1;|y_1|;(1,|y_1|)'
						},
						{
							type: 'latex',
							content: '2;|y_2|;(2,|y_2|)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = ~|a|x^2 |b|x |c|'
						}
					],
					scope: `{
										\n"a":{"min":1, "max":1, "round":0, "notNull":true},
										\n"b":{"min":2, "max":2, "round":0, "notNull":false},
										\n"c":{"min":-3, "max":-3, "round":0, "notNull":false},
										\n"y_n3": "|a|*((-3)^2) + |b|*(-3) + |c|",
										\n"y_n2": "|a|*((-2)^2) + |b|*(-2) + |c|",
										\n"y_n1": "|a|*((-1)^2) + |b|*(-1) + |c|",
										\n"y_0": "|a|*((0)^2) + |b|*(0) + |c|",
										\n"y_1": "|a|*((1)^2) + |b|*(1) + |c|",
										\n"y_2": "|a|*((2)^2) + |b|*(2) + |c|"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'latex', content: '-3,|y_n3|' },
						{ type: 'string', content: '-2,_' },
						{ type: 'string', content: '-1,_' },
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' },
						{ type: 'string', content: '2,_' }
					]
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '-1;|y_n1|;(-1,|y_n1|)'
						},
						{
							type: 'latex',
							content: '0;|y_0|;(0,|y_0|)'
						},
						{
							type: 'latex',
							content: '1;|y_1|;(1,|y_1|)'
						},
						{
							type: 'latex',
							content: '2;|y_2|;(2,|y_2|)'
						},
						{
							type: 'latex',
							content: '3;|y_3|;(3,|y_3|)'
						},
						{
							type: 'latex',
							content: '4;|y_4|;(4,|y_4|)'
						}
					],
					body: [
						{
							type: 'latex',
							content: 'y = ~|a|x^2 |b|x |c|'
						}
					],
					scope: `{
										\n"a":{"min":-1, "max":-1, "round":0, "notNull":true},
										\n"b":{"min":4, "max":4, "round":0, "notNull":false},
										\n"c":{"min":-4, "max":-4, "round":0, "notNull":false},
										\n"y_n1": "|a|*((-1)^2) + |b|*(-1) + |c|",
										\n"y_0": "|a|*((0)^2) + |b|*(0) + |c|",
										\n"y_1": "|a|*((1)^2) + |b|*(1) + |c|",
										\n"y_2": "|a|*((2)^2) + |b|*(2) + |c|",
										\n"y_3": "|a|*((3)^2) + |b|*(3) + |c|",
										\n"y_4": "|a|*((4)^2) + |b|*(4) + |c|"
									}`,
					userAnswerPlaceholder: '_',
					options: [
						{ type: 'latex', content: '-1,|y_n1|' },
						{ type: 'string', content: '0,_' },
						{ type: 'string', content: '1,_' },
						{ type: 'string', content: '2,_' },
						{ type: 'string', content: '3,_' },
						{ type: 'string', content: '4,_' }
					]
				}
			],
			instructions: `Toda função polinomial do tipo
                        y = ax² + bx + c, com a, b e c reais e
                        a ≠ 0, definida de R em R, é chamada de <strong><i>função quadrática</i></strong>.`
		}
	]
} as Section;
