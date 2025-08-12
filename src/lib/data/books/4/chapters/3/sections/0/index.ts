import type { Section } from "$lib/types/Section";

export default {
	id: '2617e713-e6aa-4335-9a9d-e9ff6a8fccd8',
	title: 'Equações biquadradas',
	quests: [
		{
			id: 'f14b1f7f-a15a-4dd1-b79b-64673aa9c263',
			tips: ``,
			questType: 'Checkbox',
			command: 'Assinale as alternativas que apresentam equações biquadradas.',
			quantity: 3,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'x^4  |ba|x^2  |bb| = 0'
						},
						{
							type: 'latex',
							content: 'x^4  |cb| = 0'
						},
						{
							type: 'latex',
							content: 'x^4  |da|x^2 = 0'
						},
						{
							type: 'latex',
							content: '|fa|x^4  |fb|x^2  |fc| = 0'
						},
						{
							type: 'latex',
							content: 'x^4  |ga|x^2  |gb| = 0'
						}
					],
					body: [{ type: 'string', content: '' }],
					scope:
						'{\n"aa":{"min":-10, "max":3, "round":0, "notNull":true},\n"ab":{"min":4, "max":10, "round":0, "notNull":true},\n"ba":{"min":-10, "max":3, "round":0, "notNull":true},\n"bb":{"min":4, "max":10, "round":0, "notNull":true},\n"cb":{"min":-10, "max":3, "round":0, "notNull":true},\n"da":{"min":-10, "max":3, "round":0, "notNull":true},\n"ea":{"min":-10, "max":3, "round":0, "notNull":true},\n"eb":{"min":4, "max":10, "round":0, "notNull":true},\n"ec":{"min":4, "max":10, "round":0, "notNull":true},\n"fa":{"min":-10, "max":3, "round":0, "notNull":true},\n"fb":{"min":4, "max":10, "round":0, "notNull":true},\n"fc":{"min":4, "max":10, "round":0, "notNull":true},\n"ga":{"min":-10, "max":3, "round":0, "notNull":true},\n"gb":{"min":4, "max":10, "round":0, "notNull":true},\n"ha":{"min":-10, "max":3, "round":0, "notNull":true},\n"hb":{"min":4, "max":10, "round":0, "notNull":true}\n}',
					userAnswerPlaceholder: '',

					options: [
						{ type: 'latex', content: 'x^2  |aa|x  |ab| = 0' },
						{ type: 'latex', content: 'x^4  |ba|x^2  |bb| = 0' },
						{ type: 'latex', content: 'x^4  |cb| = 0' },
						{ type: 'latex', content: 'x^4  |da|x^2 = 0' },
						{ type: 'latex', content: '|ea|x^4  |eb|x^3  |ec|x^2 = 0' },
						{ type: 'latex', content: '|fa|x^4  |fb|x^2  |fc| = 0' },
						{ type: 'latex', content: 'x^4  |ga|x^2  |gb| = 0' },
						{ type: 'latex', content: 'x^4  |ha|x  |hb| = 0' }
					]
				}
			],
			instructions:
				'Equações biquadradas são escritas genericamente da seguinte forma: ax<sup>4</sup> + bx<sup>2</sup> + c = 0. Para determinar suas raízes, devemos apresentá-la como uma equação do 2º grau.'
		},
		{
			id: 'c70618f1-8590-4088-a1e3-16723c0f07f7',
			tips: ``,
			questType: 'MathInput',
			command: 'Resolva as equações para U em R.',
			quantity: 7,
			questData: [
				{
					correctAnswer: [
						{ type: 'latex', content: 'S=\\left\\lbrace|x1|,|x2|,|x4|,|x3|\\right\\rbrace' },
						{ type: 'latex', content: 'S=\\left\\lbrace|x4|,|x3|,|x1|,|x2|\\right\\rbrace' }
					],
					body: [{ type: 'latex', content: '|a|x^4  |c|x^2  |e| = 0' }],
					// scope: `{\n "x1": {"min": -5, "max": -1, "round": 0, "notNull": true},
					// 	\n  "x2": {"min": 1, "max": 3, "round": 0, "notNull": true},
					//  	\n  "x3": {"min": 4, "max": 6, "round": 0, "notNull": true},
					//  	\n  "x4": {"min": 7, "max": 9, "round": 0, "notNull": true},
					// 	\n  "a": {"min": 1, "max": 3, "round": 0, "notNull": true},
					// 	\n  "b": "|a| * (-(|x1| + |x2| + |x3| + |x4|))",
					// 	\n  "c": "|a| * (|x1|*|x2| + |x1|*|x3| + |x1|*|x4| + |x2|*|x3| + |x2|*|x4| + |x3|*|x4|)",
					// 	\n  "d": "|a| * (-(|x1|*|x2|*|x3| + |x1|*|x2|*|x4| + |x1|*|x3|*|x4| + |x2|*|x3|*|x4|))",
					// 	\n  "e": "|a| * |x1|*|x2|*|x3|*|x4|"
					// 	}`,
					scope: `{\n "x1": {"min": -4, "max": -1, "round": 0, "notNull": true},
									\n  "x2": "-|x1|",
								 	\n  "x3": {"min": 5, "max": 7, "round": 0, "notNull": true},
								 	\n  "x4": "-|x3|",
									\n  "a": {"min": 1, "max": 3, "round": 0, "notNull": true},
									\n  "b": "|a| * (-(|x1| + |x2| + |x3| + |x4|))",
									\n  "c": "|a| * (|x1|*|x2| + |x1|*|x3| + |x1|*|x4| + |x2|*|x3| + |x2|*|x4| + |x3|*|x4|)",
									\n  "d": "|a| * (-(|x1|*|x2|*|x3| + |x1|*|x2|*|x4| + |x1|*|x3|*|x4| + |x2|*|x3|*|x4|))",
									\n  "e": "|a| * |x1|*|x2|*|x3|*|x4|"
									}`,
					userAnswerPlaceholder: 'S=\\placeholder'
				},

				{
					correctAnswer: [{ type: 'latex', content: 'S=\\left\\lbrace\\right\\rbrace' }],
					body: [{ type: 'latex', content: '|a|x^4  |b|x^2  |c| = 0' }],
					scope:
						'{\n"a":{"min":2, "max":10, "round":0, "notNull":true},\n"b":{"min":-10, "max":10, "round":0, "notNull":true},\n"c":"(|b|*|b|)"}',

					userAnswerPlaceholder: 'S=\\placeholder'
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|fator|\\sqrt2,|fator_p|\\sqrt2\\right\\rbrace'
						},
						{
							type: 'latex',
							content: 'S=\\left\\lbrace|fator_p|\\sqrt2,|fator|\\sqrt2\\right\\rbrace'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|a|x^4  |c| = 0'
						}
					],
					scope: `{
									\n"a":{"min":-3, "max":3, "round":0, "notNull":true},
									\n"exp":{"min":2, "max":7, "round":0, "notNull":true, "type":"odd"},
									\n"fator":"sqrt(2^(|exp|-1))",
									\n"fator_p":"(|fator|*(-1))",
									\n"radicand":"2^|exp|",
									\n"c":"|a|*|radicand|^2"
									}`,

					userAnswerPlaceholder: 'S=\\placeholder'
				}
			],
			instructions: `
                        `
		}
	]
} as Section;
