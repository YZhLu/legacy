import type { Section } from "$lib/types/Section";

export default {
	id: '9d23250b-f561-4068-ba55-59596330b6cc',
	title: '',
	quests: [
		{
			id: '1da0c785-766e-4d0b-a42e-9929fe6cacf0',
			tips: `Equações do tipo:
                            $$ax^2 + bx + c = 0 $$,                            com $a$, $b$ e $c$ reais e $a ≠ 0$, são denominadas
                            equações do 2º grau.					
                            a, b e c são os coeficientes da equação.
                            O coeficiente c é chamado termo
                            independente.`,
			questType: 'MathInput',
			command: 'Determine os valores dos coeficientes a, b e c destas equações.',
			quantity: 5,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'a = |a|; b = |b|; c = |c|' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"a":{"min":-20, "max":20, "round":0, "notNull":true},\n"b":{"min":-20, "max":20, "round":0, "notNull":true},\n"c":{"min":-20, "max":20, "round":0, "notNull":true}}',
					userAnswerPlaceholder: 'a=\\placeholder{};b=\\placeholder{};c=\\placeholder{}.'
				}
			],
			instructions: `
                            Equações do tipo:
                            $$ax^2 + bx + c = 0 $$,                            com $a$, $b$ e $c$ reais e $a ≠ 0$, são denominadas
                            equações do 2º grau.					
                            a, b e c são os coeficientes da equação.
                            O coeficiente c é chamado termo
                            independente.
                        `
		}
	]
} as Section;
