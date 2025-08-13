import type { Section } from "$lib/types/Section";

export default {
	id: 'c1bb2085-eefe-4810-b8ec-7e00fb995aaf',
	title: 'Discussão quanto às raízes de uma equação do 2° grau',
	quests: [
		{
			id: '597bdb67-00f9-4f05-b1e1-c87d7dc3ee4c',
			tips: `A resolução de equações do 2º grau, por meio da fórmula de Bhaskara, depende do valor do discriminante ∆:\\
                        •	 Quando ∆ > 0, a equação apresenta duas raízes reais e diferentes.\\
                        •	 Quando ∆ = 0, a equação apresenta duas raízes reais e iguais.\\
                        •	 Quando ∆ < 0, a equação não apresenta nenhuma raiz real.\\`,
			questType: 'MultipleChoice',
			command:
				'Calcule apenas o ∆ e responda se a equação admite: duas raízes reais e diferentes, duas raízes reais e iguais ou não admite nenhuma raiz real.',
			quantity: 8,
			questData: [
				{
					correctAnswer: [{ type: 'string', content: 'Admite duas raízes reais e diferentes.' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":3, "round":0, "notNull":true},\n"x2":{"min":4, "max":10, "round":0, "notNull":true},\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: 'Admite duas raízes reais e diferentes.' },
						{ type: 'string', content: 'Admite duas raízes reais e iguais.' },
						{ type: 'string', content: 'Não admite nenhuma raiz real.' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: 'Não admite nenhuma raiz real.' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":{"min":-10, "max":10, "round":0, "notNull":true},\n"c":"(|b|*|b|)"}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: 'Admite duas raízes reais e diferentes.' },
						{ type: 'string', content: 'Admite duas raízes reais e iguais.' },
						{ type: 'string', content: 'Não admite nenhuma raiz real.' }
					]
				},
				{
					correctAnswer: [{ type: 'string', content: 'Admite duas raízes reais e iguais.' }],
					body: [{ type: 'latex', content: '|a|x^2  |b|x  |c| = 0' }],
					scope:
						'{\n"x1":{"min":-10, "max":10, "round":0, "notNull":true},\n"x2":"|x1|",\n"a":{"min":-10, "max":10, "round":0, "notNull":true},\n"b":"(|x1|+|x2|)*(|a|*(-1))",\n"c":"(|x1|*|x2|)*(|a|)"}',
					userAnswerPlaceholder: '',
					options: [
						{ type: 'string', content: 'Admite duas raízes reais e diferentes.' },
						{ type: 'string', content: 'Admite duas raízes reais e iguais.' },
						{ type: 'string', content: 'Não admite nenhuma raiz real.' }
					]
				}
			],
			instructions: `A resolução de equações do 2º grau, por meio da fórmula de Bhaskara, depende do valor do discriminante ∆:\\
                        •	 Quando ∆ > 0, a equação apresenta duas raízes reais e diferentes.\\
                        •	 Quando ∆ = 0, a equação apresenta duas raízes reais e iguais.\\
                        •	 Quando ∆ < 0, a equação não apresenta nenhuma raiz real.\\`
		}
	]
} as Section;
