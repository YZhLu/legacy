import type { Section } from "$lib/types/Section";

export default {
	id: 'c988177c-65cd-435a-ae27-45723569dbe9',
	title: 'Como determinar os coeficientes de uma equação do 2° grau',
	quests: [
		{
			id: 'c1dce0b1-a359-4518-9687-fb35ee4644b9',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command: 'Para que valores de m a equação abaixo possui duas raízes reais e diferentes?',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'm<|s|' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x 2m = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"(|b|*|b|)/(|a|*8)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'm\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: '3e541ed0-8183-457e-8c0f-7be7efb0fbf6',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command: 'Para que valores de m a equação abaixo possui duas raízes reais e diferentes?',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'm<|s|' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  2m = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"(|b|*|b|)/(|a|*8)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'm\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: 'b561c940-6aab-4e9f-88e0-6a4ffbc19ee6',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command:
				'Calcule o valor de k na equação abaixo, para que ela admita duas raízes reais e diferentes.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'k<|s|' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x |f|k = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'k\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: 'e5185e87-9f56-4808-8701-9943b664ca61',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command: 'Para que valores de m a equação abaixo possui duas raízes reais e iguais?',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'm=|s|' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |f|m = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'm\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: '19bef59c-4d0e-48d2-b848-1602d52b6491',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command:
				'Calcule o valor de p a equação abaixo para que ela admita duas raízes reais e iguais.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'p=|s|' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x |f|p = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'p\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: '7b2c3020-705c-433b-822a-09ff6b1bd06e',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command: 'Para que valores de k a equação abaixo admite duas raízes reais e iguais?',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'k=|s|' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  + (k |f|) = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'k\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: 'fdc52489-55e9-402f-82d5-347034839652',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command: 'Para que valores de m a equação abaixo não admite nenhuma raiz real?',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'm>|s|' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  + (m |f|) = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'm\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: '9dcfe06f-6a4c-49db-bb4b-a3d0d4d13e3c',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command: 'Calcule o valor de k na equação abaixo para que ela não admita nenhuma raiz real.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'k>|s|' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |f|k = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b|)/(|a|*4*|f|)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'k\\placeholder'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: 'd6ca86ef-9022-4126-9994-58e49b43b5a1',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command:
				'Calcule o valor de p para que a equação abaixo: a) não admita nenhuma raiz real; b) admita duas raízes reais e iguais; c) admita duas raízes reais e desiguais.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'a)p<|s|;b)m=|s|;c)m>|s|.' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x - p = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":-6, "round":0, "notNull":true},\n"x2":{"min":1, "max":5, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"m":"(|b|*|b|)/(-|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'a)\\placeholder{};b)\\placeholder{};c)\\placeholder{}.'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		},
		{
			id: 'a6aa00b9-8a6a-4d74-8831-3e377941068e',
			tips: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`,
			questType: 'MathInput',
			command:
				'Calcule o valor de m para que a equação abaixo: a) admita duas raízes reais e iguais; b) admita duas raízes reais e diferentes; c) não admita nenhuma raiz real.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [{ type: 'latex', content: 'a)m=|s|;b)m<|s|;c)m>|s|.' }],
					body: [{ type: 'latex', content: '|a|x^2 |b|x + (m |f|) = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":-6, "round":0, "notNull":true},\n"x2":{"min":1, "max":5, "round":0, "notNull":true},\n"a":{"min":1, "max":1, "round":0, "notNull":true},\n"b":(|x1|+|x2|)*(|a|*(-1))3",\n"f":{"min":1, "max":10, "round":0, "notNull":true},\n"m":"(|b|*|b| - 4*|f|)/(|a|*4)",\n"s":"formatToLatexFraction(|m|)"}',
					userAnswerPlaceholder: 'a)\\placeholder{};b)\\placeholder{};c)\\placeholder{}.'
				}
			],
			instructions: ` Exemplos:
                                            \\
                                            \\
                                            1) Calcule o valor de m na equação $x^2 - 4x - m = 0$, para que ela admita duas raízes reais e diferentes.
                                            $x^2 - 4x - m = 0$
                                            $a = 1; b = -4; c = -m$
                                            $\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot (-m) = 16 + 4m$
                                            $\\Delta = 16 + 4m$

                                            Para que essa equação tenha duas raízes reais e diferentes o valor de $\\Delta$ tem que ser maior do que zero $(\\Delta > 0)$. Como $\\Delta = 16 + 4m$, temos:
                                            $16 + 4m > 0$\\
                                            $4m > -16$\\
                                            $m >  \\frac{-16}{4}$\\
                                            $m > -4$
                                            Para essa equação ter duas raízes reais diferentes, o valor de m tem que ser maior do que $-4$.\\
                                            \\
                                            \\
                                            2) Calcule o valor de k na equação $x^2 - 10x + 5k = 0$, para que ela admita duas raízes reais e iguais.
                                            $x^2 - 10x + 5k = 0$
                                            $a = 1; b = -10; c = 5k$
                                            $\\Delta = b^2 - 4ac = (-10)^2 - 4 \\cdot 1 \\cdot 5k = 100 - 20k$
                                            $\\Delta = 100 - 20k$

                                            Para termos raízes reais e iguais:
                                            $\\Delta = 0$, então,                                            $100 - 20k = 0$
                                            $-20k = -100 (-1)$\\
                                            $20k = 100$ \\
                                            $k = \\frac{100}{20}$\\
                                            $k = 5$
                                            \\
                                            \\
                                            3) Calcule o valor de m na equação $x^2 - 8x + (m + 1) = 0$, para que ela não admita nenhuma raiz real.
                                            $x^2 - 8x + (m + 1) = 0$\\
                                            $a = 1; b = -8; c = m + 1$\\
                                            $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot (m + 1) = 64 - 4m - 4$
                                            $\\Delta = 60 - 4m$

                                            Para que ela não admita nenhuma raiz real:
                                            $\\Delta < 0$, então,\\
                                            $60 - 4m < 0$\\
                                            $-4m < -60 (-1)$\\
                                            $4m > 60$ →	$m > \\frac{60}{4}$ → $m > 15$\\`
		}
	]
} as Section;
