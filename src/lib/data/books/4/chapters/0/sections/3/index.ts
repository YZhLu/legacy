import type { Section } from "$lib/types/Section";

export default {
	id: 'a094761c-2947-42b2-91dd-e40aea94af6b',
	title: 'Como reduzir radicais ao mesmo índice',
	quests: [
		{
			id: 'e6875c41-c54d-4f0c-8c56-644150e56902',
			tips: ``,
			questType: 'MathInput',
			command: `Reduza os radicais ao mesmo índice.`,
			quantity: 9,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index_2|]{|base|^|index|};\\sqrt[|index_2|]{|base_2|^2}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|base|}~;~\\sqrt[|index|]{|base_2|}' }],
					scope: `{
									\n"index":{"min":3,"max":5,"round":0,"notNull":true},
									\n"index_2":"|index|*2",
									\n"base": {"min":2,"max":6,"round":0,"notNull":true},
									\n"base_2": {"min":2,"max":6,"round":0,"notNull":true}
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content:
								'\\sqrt[|index_2|]{x^{|pow|}};\\sqrt[|index_2|]{y^{|pow_2|}};\\sqrt[|index_2|]{z^{|pow_3|}}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{x^{|exp|}}~;~\\sqrt[3]{y^{|exp_2|}}~;~\\sqrt[|index|]{z^{|exp_3|}}'
						}
					],
					scope: `{
									\n"index": {"min":5,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index_2":"|index|*6",
									\n"exp": {"min":2,"max":6,"round":0,"notNull":true},
									\n"exp_2": {"min":2,"max":6,"round":0,"notNull":true, "type":"odd"},
									\n"exp_3": {"min":2,"max":6,"round":0,"notNull":true},
									\n"pow":"|index|*3*|exp|",
									\n"pow_2":"|index|*2*|exp_2|",
									\n"pow_3":"6*|exp_3|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[6]{x^{|pow|}};\\sqrt[6]{y^{|pow_2|}};\\sqrt[6]{z^|exp_3|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '\\sqrt{x^{|exp|}}~;~\\sqrt[3]{y^{|exp_2|}}~;~\\sqrt[6]{z^{|exp_3|}}'
						}
					],
					scope: `{
									\n"exp": {"min":4,"max":7,"round":0,"notNull":true},
									\n"exp_2": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"exp_3": {"min":4,"max":7,"round":0,"notNull":true},
									\n"pow":"3*|exp|",
									\n"pow_2":"2*|exp_2|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
