import type { Section } from "$lib/types/Section";

export default {
	id: '51477c2d-32e1-402e-908e-6d306f9014a1',
	title: 'Multiplicação e divisão de radicais',
	quests: [
		{
			id: 'f3861910-fdd1-45c9-aa2b-542005fd0cc7',
			tips: ``,
			questType: 'MathInput',
			command: `Efetue as operações.`,
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt{|p|}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|a|} \\cdot \\sqrt{|b|}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"p": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|s|}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt[|index|]{|a|} \\cdot \\sqrt[|index|]{|b|}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":3,"max":9,"round":0,"notNull":true, "type":"even"},
									\n"s": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|p|\\sqrt[|index|]{|s|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|x1|\\sqrt[|index|]{|a|} \\cdot ~|x2|\\sqrt[|index|]{|b|}'
						}
					],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":3,"max":9,"round":0,"notNull":true, "type":"even"},
									\n"x1": {"min":2,"max":10,"round":0,"notNull":true},
									\n"x2": {"min":2,"max":10,"round":0,"notNull":true},
									\n"s": "|a|*|b|",
									\n"p": "|x1|*|x2|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|x1|\\sqrt[|index|]{|a|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|p|\\sqrt[|index|]{|s|} \\div ~|x2|\\sqrt[|index|]{|b|}'
						}
					],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":3,"max":9,"round":0,"notNull":true, "type":"even"},
									\n"x1": {"min":2,"max":10,"round":0,"notNull":true},
									\n"x2": {"min":2,"max":10,"round":0,"notNull":true},
									\n"s": "|a|*|b|",
									\n"p": "|x1|*|x2|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt|a|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|p|} \\div \\sqrt{|b|}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"p": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|p|x'
						}
					],
					body: [{ type: 'latex', content: '|a|x\\sqrt{2} \\cdot \\sqrt{|radicand_2|x^2}' }],
					scope: `{
									\n"b": {"min":3,"max":12,"round":0,"notNull":true, "type":"even"},
									\n"a": {"min":2,"max":12,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 / 2",
									\n"p": "|a|*|b|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: 'f9f5d90a-ca3a-4420-8949-7c3f3f1d6840',
			tips: ``,
			questType: 'MathInput',
			command: `Efetue as operações.`,
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '\\sqrt[|index|]{|f|}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|a|} \\cdot \\sqrt[|index|]{|b|}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":3,"max":9,"round":0,"notNull":true, "type":"even"},
									\n"index_2": "|index|/2 ",
									\n"s": "|a|*|b|",
									\n"f": "|a|^|index_2|*|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|x1|\\sqrt[|index|]{x^{|f|}}'
						}
					],
					body: [{ type: 'latex', content: '|xp|\\sqrt{x^|a|} \\div ~|x2|\\sqrt[|index|]{x^|b|}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"x1": {"min":3,"max":9,"round":0,"notNull":true},
									\n"x2": {"min":3,"max":9,"round":0,"notNull":true},
									\n"xp": "|x1|*|x2|",
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":5,"max":11,"round":0,"notNull":true, "type":"even"},
									\n"index_2": "|index|/2",
									\n"s": "|index_2|*|a|",
									\n"f": "|s|-|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|xp|\\sqrt[|index|]{|f|}'
						}
					],
					body: [{ type: 'latex', content: '|x1|\\sqrt{|a|} \\cdot ~|x2|\\sqrt[|index|]{|b|}' }],
					scope: `{
									\n"b": {"min":2,"max":3,"round":0,"notNull":true},
									\n"x1": {"min":3,"max":9,"round":0,"notNull":true},
									\n"x2": {"min":3,"max":9,"round":0,"notNull":true},
									\n"xp": "|x1|*|x2|",
									\n"a": {"min":4,"max":7,"round":0,"notNull":true, "type":"odd"},
									\n"index": {"min":3,"max":9,"round":0,"notNull":true, "type":"even"},
									\n"index_2": "|index|/2 ",
									\n"s": "|a|*|b|",
									\n"f": "|a|^|index_2|*|b|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
