import type { Section } from "$lib/types/Section";

export default {
	id: 'e5260c97-0fc4-46fe-8905-11153655624e',
	title: 'Função',
	quests: [
		{
			id: 'bd774c21-a5b0-4d87-89c7-04082310b236',
			tips: ``,
			questType: 'Checkbox',
			command:
				'Dados os diagramas, assinale as alternativas em que esses diagramas representam função.',
			quantity: 1,
			questData: [
				{
					correctAnswer: [
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_1.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_2.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_3.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_4.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_5.png'
						}
					],
					body: [],
					scope: `{}`,
					userAnswerPlaceholder: '',
					options: [
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_1.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_2.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_3.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_4.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/right/function_right_5.png'
						},

						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/wrong/function_wrong_1.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/wrong/function_wrong_2.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/wrong/function_wrong_3.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/wrong/function_wrong_4.png'
						},
						{
							type: 'img',
							content: 'https://aulazero.xyz/dojo/book4/wrong/function_wrong_5.png'
						}
					]
				}
			],
			instructions: ''
		}
	]
} as Section;
