import type { Section } from "$lib/types/Section";

export default {
	id: '7bafec23-f32d-4c04-8396-453e909c02fe',
	title: 'Como inserir um fator em um radical',
	quests: [
		{
			id: '9d8e7f6a-5b4c-3d2e-1f9a-8b7c6d5e4f3a',  // Added UUID
			tips: ``,
			questType: 'MathInput',
			command: `Desenvolva as multiplicações, colocando os fatores nos radicais.`,
			quantity: 14,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|radicand|b^{|index|}x^|index_2|}'
						}
					],
					body: [{ type: 'latex', content: '|base|b\\cdot \\sqrt[|index|]{x^|index_2|}' }],
					scope: `{
									\n"index":{"min":3,"max":4,"round":0,"notNull":true},
									\n"index_2":"|index|-1",
									\n"base": {"min":2,"max":6,"round":0,"notNull":true},
									\n"radicand": "|base|^|index|"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|y^{|index_2|}x^|index|}'
						}
					],
					body: [{ type: 'latex', content: '|base|y^{|index|}\\cdot \\sqrt{x^|index|}' }],
					scope: `{
									\n"index":{"min":2,"max":9,"round":0,"notNull":true},
									\n"index_2":"|index|*2",
									\n"base": {"min":2,"max":12,"round":0,"notNull":true},
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|y^{|index_2|}x^|exp|}'
						}
					],
					body: [{ type: 'latex', content: '|base|y^{|index|}\\cdot \\sqrt{x^|exp|}' }],
					scope: `{
									\n"exp":{"min":2,"max":9,"round":0,"notNull":true},
									\n"index":{"min":2,"max":9,"round":0,"notNull":true},
									\n"index_2":"|index|*2",
									\n"base": {"min":2,"max":12,"round":0,"notNull":true},
									\n"radicand": "|base|^2"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|radicand|x^|index_2|}'
						}
					],
					body: [{ type: 'latex', content: '|base|\\cdot \\sqrt[|index|]{x^|index_2|}' }],
					scope: `{
									\n"index":{"min":3,"max":4,"round":0,"notNull":true},
									\n"index_2":"|index|-1",
									\n"base": {"min":2,"max":6,"round":0,"notNull":true},
									\n"radicand": "|base|^|index|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|radicand|}'
						}
					],
					body: [{ type: 'latex', content: '|num|\\sqrt{|base|}' }],
					scope: `{\n"base":{"min":2,"max":5,"round":0,"notNull":false, "type":"odd"},
									\n"num":{"min":2,"max":9,"round":0,"notNull":true},
									\n"radicand":"|num|^2*|base|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
