import type { Section } from "$lib/types/Section";

export default {
	id: '17794380-6fc7-4088-ac37-d7841e92212c',
	title: 'Adição e subtração de radicais',
	quests: [
		{
			id: 'f1189c47-5a46-4804-8baf-24ba8cc984d1',
			tips: ``,
			questType: 'MathInput',
			command: `Resolva as operações.`,
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt{|base|}'
						}
					],
					body: [{ type: 'latex', content: '|a|\\sqrt{|base|} |b|\\sqrt{|base|}' }],
					scope: `{

									\n"b":{"min":-19,"max":19,"round":0,"notNull":true},
									\n"base": {"min":-19,"max":-10,"round":0,"notNull":true},
									\n"a": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt{|base|}'
						}
					],
					body: [{ type: 'latex', content: '|a|\\sqrt{|base|} |b|\\sqrt{|base|}' }],
					scope: `{

									\n"b":{"min":-19,"max":19,"round":0,"notNull":true},
									\n"base": {"min":10,"max":19,"round":0,"notNull":true},
									\n"a": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt[|index|]{|base|}'
						}
					],
					body: [
						{
							type: 'latex',
							content: '|a|\\sqrt[|index|]{|base|} |b|\\sqrt[|index|]{|base|}'
						}
					],
					scope: `{
									\n"index":{"min":3,"max":9,"round":0,"notNull":true},
									\n"b":{"min":-19,"max":19,"round":0,"notNull":true},
									\n"base": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"a": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '0'
						}
					],
					body: [{ type: 'latex', content: '|a|\\sqrt[|index|]{0} |b|\\sqrt[|index|]{0}' }],
					scope: `{
									\n"index":{"min":3,"max":9,"round":0,"notNull":true},
									\n"b":{"min":-19,"max":19,"round":0,"notNull":true},
									\n"base": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"a": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|b|\\sqrt[|index|]{|base|}'
						}
					],
					body: [{ type: 'latex', content: '|a|\\sqrt[|index|]{0} |b|\\sqrt[|index|]{|base|}' }],
					scope: `{
									\n"index":{"min":3,"max":9,"round":0,"notNull":true},
									\n"b":{"min":-19,"max":19,"round":0,"notNull":true},
									\n"base": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"a": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '0'
						}
					],
					body: [{ type: 'latex', content: '0\\sqrt[|index|]{|base|} 0\\sqrt[|index|]{|base|}' }],
					scope: `{
									\n"index":{"min":3,"max":9,"round":0,"notNull":true},
									\n"b":{"min":-19,"max":19,"round":0,"notNull":true},
									\n"base": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"a": {"min":-19,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt[|index|]{x}'
						}
					],
					body: [
						{
							type: 'latex',
							content:
								'|a|\\sqrt[|index|]{x} |b|\\sqrt[|index|]{x} 0\\sqrt[|index|]{x} |c|\\sqrt[|index|]{x}'
						}
					],
					scope: `{
									\n"index":{"min":3,"max":9,"round":0,"notNull":true},
									\n"b":{"min":-19,"max":-2,"round":0,"notNull":true},
									\n"c": {"min":3,"max":19,"round":0,"notNull":true},
									\n"a": {"min":2,"max":19,"round":0,"notNull":true},
									\n"s": "|a|+|b|+|c|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		},
		{
			id: 'ed2742e4-ebb1-49c8-b793-33704eafbc6b',
			tips: ``,
			questType: 'MathInput',
			command: `Simplifique e reduza os termos semelhantes.`,
			quantity: 12,
			questData: [
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt{x}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|x} + \\sqrt{|radicand_2|x}' }],
					scope: `{

									\n"b": {"min":2,"max":15,"round":0,"notNull":true},
									\n"a": {"min":2,"max":15,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt{x}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|x} - \\sqrt{|radicand_2|x}' }],
					scope: `{
									\n"b": {"min":2,"max":7,"round":0,"notNull":true},
									\n"a": {"min":8,"max":15,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|-|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|\\sqrt{x}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|x} - \\sqrt{|radicand_2|x}' }],
					scope: `{
									\n"b": {"min":8,"max":15,"round":0,"notNull":true},
									\n"a": {"min":2,"max":7,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|-|b|"
									}`,
					userAnswerPlaceholder: ''
				},

				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|} - \\sqrt{|radicand_2|}' }],
					scope: `{
									\n"b": {"min":2,"max":7,"round":0,"notNull":true},
									\n"a": {"min":8,"max":15,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|-|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|} - \\sqrt{|radicand_2|}' }],
					scope: `{
									\n"a": {"min":2,"max":7,"round":0,"notNull":true},
									\n"b": {"min":8,"max":15,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|-|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|s|'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|} + \\sqrt{|radicand_2|}' }],
					scope: `{
									\n"b": {"min":2,"max":15,"round":0,"notNull":true},
									\n"a": {"min":2,"max":15,"round":0,"notNull":true},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				},
				{
					correctAnswer: [
						{
							type: 'latex',
							content: '|a|\\sqrt{x} |b|\\sqrt{y}'
						}
					],
					body: [{ type: 'latex', content: '\\sqrt{|radicand_1|x} + \\sqrt{|radicand_2|y}' }],
					scope: `{
									\n"b": {"min":2,"max":15,"round":0,"notNull":true, "type":"odd"},
									\n"a": {"min":2,"max":15,"round":0,"notNull":true, "type":"odd"},
									\n"radicand_1": "|a|^2 ",
									\n"radicand_2": "|b|^2 ",
									\n"s": "|a|+|b|"
									}`,
					userAnswerPlaceholder: ''
				}
			],
			instructions: ``
		}
	]
} as Section;
