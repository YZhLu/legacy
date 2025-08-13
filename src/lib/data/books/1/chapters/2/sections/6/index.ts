import type { Section } from "$lib/types/Section";

export default {
	id: '3809b199-10fe-48c9-9c57-7d06b1e26861',
	title: 'Relações entre coeficientes e raízes de uma equação do 2° grau',
	quests: [
		{
			id: '89f908a6-f4a1-4598-a4ab-ac5c3c4bd218',
			tips: `Relações entre coeficientes e raízes de uma equação do 2º grau:
                        \\
                        \\
                                    Soma das raízes:
                                    $$x_1 + x_2 = \\frac{-b}{a} → S = \\frac{-b}{a} $$\
                                    \
                                    Produto das raízes:
                                    $$x_1 \\cdot x_2 = \\frac{c}{a} → P = \\frac{c}{a}$$
                                    \\
                                    Exemplos:
                                    Determine a soma e o produto das raízes sem resolver a equação:

                                    a$)$ $3x^2 + 6x - 9 = 0$\\
                                    $x_1 + x_2 = \\frac{-b}{a} = \\frac{-6}{3} = -2 \\rightarrow S = -2$\\
                                    $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{-9}{3} = -3 \\rightarrow P = -3$\\
                                    \\
                                    b$)$ $x^2 - 5x = 0$
                                    $x_1 + x_2 = \\frac{-b}{a} = \\frac{-(-5)}{1} = 5 \\rightarrow S = 5$\\
                                    $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{0}{1} = 0 \\rightarrow P = 0$\\
                                    `,
			questType: 'MathInput',
			command: 'Determine a soma S e o produto P das raízes das equações, sem resolvê-las:',
			quantity: 12,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'S=|s|;P=|p|.' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x |c| = 0' }],
					scope:
						'{\n"x1":{"min":-3, "max":3, "round":0},\n"x2":{"min":-3, "max":3, "round":0},\n"a":{"min":-3, "max":3, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)",\n"p":"(|x1|*|x2|)",\n"s":"(|x1|+|x2|)"}',
					userAnswerPlaceholder: 'S=\\placeholder{};P=\\placeholder{}.'
				}
			],
			instructions: `Relações entre coeficientes e raízes de uma equação do 2º grau:
                        \\
                        \\
                                    Soma das raízes:
                                    $$x_1 + x_2 = \\frac{-b}{a} → S = \\frac{-b}{a} $$\
                                    \
                                    Produto das raízes:
                                    $$x_1 \\cdot x_2 = \\frac{c}{a} → P = \\frac{c}{a}$$
                                    \\
                                    Exemplos:
                                    Determine a soma e o produto das raízes sem resolver a equação:

                                    a$)$ $3x^2 + 6x - 9 = 0$\\
                                    $x_1 + x_2 = \\frac{-b}{a} = \\frac{-6}{3} = -2 \\rightarrow S = -2$\\
                                    $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{-9}{3} = -3 \\rightarrow P = -3$\\
                                    \\
                                    b$)$ $x^2 - 5x = 0$
                                    $x_1 + x_2 = \\frac{-b}{a} = \\frac{-(-5)}{1} = 5 \\rightarrow S = 5$\\
                                    $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{0}{1} = 0 \\rightarrow P = 0$\\
                                    `
		}
	]
} as Section;
