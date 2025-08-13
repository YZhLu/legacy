import type { Section } from "$lib/types/Section";

export default {
	id: 'e1a243f4-f724-4e6a-9962-c5d7849df0f5',
	title: 'Raízes simétricas',
	quests: [
		{
			id: 'df75b4fd-7ec7-4e38-a51f-6efd5a08360a',
			tips: `Raízes simétricas são aquelas cujos sinais
                                são opostos.
                                Genericamente: 
                                $$|x_1| = |–x_2|$$
                                Quando as raízes são simétricas, temos
                                $$S = 0$$, pois $$S = x_1
                                + x_2$$
                            `,
			questType: 'MathInput',
			command: 'Determine p na equação para que as raízes sejam simétricas.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x2|' }],
					body: [{ type: 'latex', content: '|a|x^2 + (p |x1|)x |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"-|x1|",\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: ''
				}
			],
			instructions: `Raízes simétricas são aquelas cujos sinais
                                        são opostos.
                                        Genericamente: 
                                        $$|x_1| = |–x_2|$$
                                        Quando as raízes são simétricas, temos
                                        $S = 0$, pois $S = x_1
                                        + x_2$
                                        `
		},
		{
			id: '622f42de-696f-4676-b07a-5d0b69958f85',
			tips: `Raízes simétricas são aquelas cujos sinais
                                são opostos.
                                Genericamente: 
                                $$|x_1| = |–x_2|$$
                                Quando as raízes são simétricas, temos
                                $$S = 0$$, pois $$S = x_1
                                + x_2$$
                            `,
			questType: 'MathInput',
			command: 'Determine p na equação para que as raízes sejam simétricas.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|x2|' }],
					body: [{ type: 'latex', content: '|a|x^2 - (p |x1|)x |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"-|x1|",\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: ''
				}
			],
			instructions: `Raízes simétricas são aquelas cujos sinais
                                        são opostos.
                                        Genericamente: 
                                        $$|x_1| = |–x_2|$$
                                        Quando as raízes são simétricas, temos
                                        $S = 0$, pois $S = x_1
                                        + x_2$
                                        `
		}
	]
} as Section;
