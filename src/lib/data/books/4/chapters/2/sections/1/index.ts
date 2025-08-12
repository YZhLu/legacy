import type { Section } from "$lib/types/Section";

export default {
	id: '097a5f77-abec-41a1-901a-b13d0df20c40',
	title: 'Equações do 2° grau incompletas',
	quests: [
		{
			id: 'c5f8b325-cb06-4d6a-8a1a-c9d801cc4121',
			tips: `Exemplo: $$a = 1; b = 5; c = – 3 →$$ 
                        $$→  x^2 + 5x – 3 = 0$$`,
			questType: 'MathInput',
			command:
				'Dados os valores dos coeficientes a, b e c, determine as equações do 2º grau com incógnita x.',
			quantity: 7,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					body: [{ type: 'latex', content: 'a = |a|; b = |b|; c = |c|' }],
					scope:
						'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [{ type: 'latex', content: '|a|x^2  |b|x = 0' }],
					body: [{ type: 'latex', content: 'a = |a|; b = |b|; c = 0' }],
					scope:
						'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [{ type: 'latex', content: '|a|x^2  |c| = 0' }],
					body: [{ type: 'latex', content: 'a = |a|; b = 0; c = |c|' }],
					scope:
						'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [{ type: 'latex', content: '|b|x |c| = 0' }],
					body: [{ type: 'latex', content: 'a = 0; b = |b|; c = |c|' }],
					scope:
						'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: ''
				}
			],
			instructions: `Equações do 2º grau incompletas são equações que possuem os
                                coeficientes $b$ e $c$ nulos, ou apenas um
                                deles nulo.
                                Exemplos:
                                $$5x² = 0$$ 
                                $$3x² + 2x = 0$$
                                $$3x² + 9 = 0$$`
		}
	]
} as Section;
