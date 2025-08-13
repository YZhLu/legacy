export interface Quest {
	title: string;
	type?: 'latex';
	fixed?: {
		value: string;
		range?: [number, number];
	};
	random?: {
		value: string;
		range?: [number, number];
	};
}

export interface Section {
	id: string;
	title: string;
	quests: Quest[];
}

export interface Chapter {
	id: string;
	title: string;
	operation:
		| 'addition'
		| 'subtraction'
		| 'multiplication'
		| 'division'
		| 'fraction'
		| 'exponentiation'
		| 'root'
		| 'logarithm';
	sections: Section[];
	questsCount: number;
}
export const speedChapters: Chapter[] = [
	{
		id: 'e5107f62-7c81-4b5b-b3a3-20b03b4efe42',
		title: 'Adição',
		operation: 'addition',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: '',
				quests: [
					{
						title: '0..99 + ?',
						fixed: { value: 'left', range: [0, 99] },
						random: { value: 'right', range: [0, 99] }
					},
					{
						title: '100..999 + ?',
						fixed: { value: 'left', range: [100, 999] },
						random: { value: 'right', range: [0, 999] }
					},
					{
						title: '1000..9999 + ?',
						fixed: { value: 'left', range: [1000, 9999] },
						random: { value: 'right', range: [0, 9999] }
					},
					{
						title: '0..10,0 + ?',
						fixed: { value: 'left', range: [0, 10] },
						random: { value: 'right', range: [0, 10] }
					}
				]
			}
		],
		questsCount: 4
	},
	{
		id: 'd2127c09-1123-4b3e-89dc-37a5f9d14a46',
		title: 'Subtração',
		operation: 'subtraction',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: '',
				quests: [
					{
						title: '0..99 - ?',
						fixed: { value: 'left', range: [0, 99] },
						random: { value: 'right', range: [0, 99] }
					},
					{
						title: '100..999 - ?',
						fixed: { value: 'left', range: [100, 999] },
						random: { value: 'right', range: [0, 999] }
					},
					{
						title: '1000..9999 - ?',
						fixed: { value: 'left', range: [1000, 9999] },
						random: { value: 'right', range: [0, 9999] }
					},
					{
						title: '0..10,0 - ?',
						fixed: { value: 'left', range: [0, 10] },
						random: { value: 'right', range: [0, 10] }
					}
				]
			}
		],
		questsCount: 4
	},
	{
		id: '3873bc9d-645f-44ed-8337-d9520f64e2cc',
		title: 'Multiplicação',
		operation: 'multiplication',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: 'Elementar',
				quests: [
					{
						title: '0..1 x ?',
						fixed: { value: 'left', range: [0, 1] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '2 x ?',
						fixed: { value: 'left', range: [2, 2] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '3 x ?',
						fixed: { value: 'left', range: [3, 3] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '4 x ?',
						fixed: { value: 'left', range: [4, 4] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '5 x ?',
						fixed: { value: 'left', range: [5, 5] },
						random: { value: 'right', range: [0, 10] }
					}
				]
			},
			{
				id: '9d23250b-f561-4068-ba55-59596330b6cc',
				title: 'Básico',
				quests: [
					{
						title: '6 x ?',
						fixed: { value: 'left', range: [6, 6] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '7 x ?',
						fixed: { value: 'left', range: [7, 7] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '8 x ?',
						fixed: { value: 'left', range: [8, 8] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '9 x ?',
						fixed: { value: 'left', range: [9, 9] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '10 x ?',
						fixed: { value: 'left', range: [10, 10] },
						random: { value: 'right', range: [0, 10] }
					}
				]
			},
			{
				id: '097a5f77-abec-41a1-901a-b13d0df20c40',
				title: 'Intermediário',
				quests: [
					{
						title: '11 x ?',
						fixed: { value: 'left', range: [11, 11] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '12 x ?',
						fixed: { value: 'left', range: [12, 12] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '13 x ?',
						fixed: { value: 'left', range: [13, 13] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '14 x ?',
						fixed: { value: 'left', range: [14, 14] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '15 x ?',
						fixed: { value: 'left', range: [15, 15] },
						random: { value: 'right', range: [0, 10] }
					}
				]
			},
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: 'Avançado',
				quests: [
					{
						title: '16 x ?',
						fixed: { value: 'left', range: [16, 16] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '17 x ?',
						fixed: { value: 'left', range: [17, 17] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '18 x ?',
						fixed: { value: 'left', range: [18, 18] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '19 x ?',
						fixed: { value: 'left', range: [19, 19] },
						random: { value: 'right', range: [0, 10] }
					},
					{
						title: '20 x ?',
						fixed: { value: 'left', range: [20, 20] },
						random: { value: 'right', range: [0, 10] }
					}
				]
			}
		],
		questsCount: 20
	},
	{
		id: '348a3328-2178-4550-9528-21d391a44363',
		title: 'Divisão',
		operation: 'division',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: 'Elementar',
				quests: [
					{
						type: 'latex',
						title: '0 \\div ?',
						fixed: { value: 'left', range: [0, 0] },
						random: { value: 'right', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '? \\div 1',
						fixed: { value: 'right', range: [1, 1] },
						random: { value: 'left', range: [0, 100] }
					},
					{
						type: 'latex',
						title: '? \\div 10',
						fixed: { value: 'right', range: [10, 10] },
						random: { value: 'left', range: [0, 1000] }
					}
				]
			},
			{
				id: '9d23250b-f561-4068-ba55-59596330b6cc',
				title: 'Básico',
				quests: [
					{
						type: 'latex',
						title: '?\\div2',
						fixed: { value: 'right', range: [2, 2] },
						random: { value: 'left', range: [0, 100] }
					},
					{
						type: 'latex',
						title: '?\\div3',
						fixed: { value: 'right', range: [3, 3] },
						random: { value: 'left', range: [0, 100] }
					},
					{
						type: 'latex',
						title: '?\\div4',
						fixed: { value: 'right', range: [4, 4] },
						random: { value: 'left', range: [0, 100] }
					},
					{
						type: 'latex',
						title: '?\\div5',
						fixed: { value: 'right', range: [5, 5] },
						random: { value: 'left', range: [0, 100] }
					}
				]
			},
			{
				id: '097a5f77-abec-41a1-901a-b13d0df20c40',
				title: 'Intermediário',
				quests: [
					{
						type: 'latex',
						title: '6\\div?',
						fixed: { value: 'left', range: [6, 6] },
						random: { value: 'right', range: [1, 6] }
					},
					{
						type: 'latex',
						title: '7\\div?',
						fixed: { value: 'left', range: [7, 7] },
						random: { value: 'right', range: [1, 7] }
					},
					{
						type: 'latex',
						title: '8\\div?',
						fixed: { value: 'left', range: [8, 8] },
						random: { value: 'right', range: [1, 8] }
					},
					{
						type: 'latex',
						title: '9\\div?',
						fixed: { value: 'left', range: [9, 9] },
						random: { value: 'right', range: [1, 9] }
					},
					{
						type: 'latex',
						title: '10\\div?',
						fixed: { value: 'left', range: [10, 10] },
						random: { value: 'right', range: [1, 10] }
					}
				]
			},
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: 'Avançado',
				quests: [
					{
						type: 'latex',
						title: '1\\div?',
						fixed: { value: 'left', range: [1, 1] },
						random: { value: 'right', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '2\\div?',
						fixed: { value: 'left', range: [2, 2] },
						random: { value: 'right', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '3\\div?',
						fixed: { value: 'left', range: [3, 3] },
						random: { value: 'right', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '4\\div?',
						fixed: { value: 'left', range: [4, 4] },
						random: { value: 'right', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '5\\div?',
						fixed: { value: 'left', range: [5, 5] },
						random: { value: 'right', range: [1, 10] }
					}
				]
			}
		],
		questsCount: 17
	},
	{
		id: 'a9e3fdc9-516c-4abe-b81b-68a86fb1e757',
		title: 'Fração',
		operation: 'fraction',
		sections: [
			{
				id: '2e2845d3-70c0-474c-ae2b-bbdc73b195e9',
				title: '',
				quests: [
					{
						type: 'latex',
						title: '+',
						fixed: { value: 'operation', range: [1, 10] },
						random: { value: 'both', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '-',
						fixed: { value: 'operation', range: [1, 10] },
						random: { value: 'both', range: [1, 10] }
					},
					{
						type: 'latex',
						title: 'x',
						fixed: { value: 'operation', range: [1, 10] },
						random: { value: 'both', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '÷',
						fixed: { value: 'operation', range: [1, 10] },
						random: { value: 'both', range: [1, 10] }
					},
					{
						type: 'latex',
						title: '>',
						fixed: { value: 'operation', range: [1, 10] },
						random: { value: 'both', range: [1, 10] }
					}
				]
			}
		],
		questsCount: 5
	},
	{
		id: '132d6e71-7ee4-4dba-a820-727d901465a9',
		title: 'Exponenciação',
		operation: 'exponentiation',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: '',
				quests: [
					{
						type: 'latex',
						title: '0..1 ^ ?',
						fixed: { value: 'left', range: [0, 1] },
						random: { value: 'right', range: [0, 5] }
					},
					{
						type: 'latex',
						title: '? ^ 0..1',
						fixed: { value: 'right', range: [0, 1] },
						random: { value: 'left', range: [0, 10] }
					},
					{
						type: 'latex',
						title: '2 ^ ?',
						fixed: { value: 'left', range: [2, 2] },
						random: { value: 'right', range: [0, 5] }
					},
					{
						type: 'latex',
						title: '? ^ 2',
						fixed: { value: 'right', range: [2, 2] },
						random: { value: 'left', range: [0, 10] }
					},
					{
						type: 'latex',
						title: '? ^ ?',
						random: { value: 'both', range: [0, 5] }
					}
				]
			}
		],
		questsCount: 5
	},
	{
		id: '12e59e97-0066-4164-9951-77b81097021b',
		title: 'Radiciação',
		operation: 'root',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: '',
				quests: [
					{
						type: 'latex',
						title: '√?',
						random: { value: 'content', range: [1, 100] }
					},
					{
						type: 'latex',
						title: '∛?}',
						fixed: { value: 'operation', range: [3, 3] },
						random: { value: 'content', range: [1, 1000] }
					},
					{
						type: 'latex',
						title: '√^ ?',
						fixed: { value: 'operation', range: [2, 2] },
						random: { value: 'content', range: [1, 100] }
					},
					{
						type: 'latex',
						title: '∛ ^ ?',
						fixed: { value: 'operation', range: [3, 3] },
						random: { value: 'content', range: [1, 1000] }
					}
				]
			}
		],
		questsCount: 4
	},
	{
		id: '3d62e081-a515-4675-baaf-6b0e260de2e7',
		title: 'Logaritmação',
		operation: 'logarithm',
		sections: [
			{
				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
				title: '',
				quests: [
					{
						type: 'latex',
						title: '\\log_b0..1',
						fixed: { value: 'base', range: [2, 10] },
						random: { value: 'content', range: [0, 1] }
					},
					{
						type: 'latex',
						title: '\\log_2a',
						fixed: { value: 'base', range: [2, 2] },
						random: { value: 'content', range: [1, 100] }
					},
					{
						type: 'latex',
						title: '\\log_3a',
						fixed: { value: 'base', range: [3, 3] },
						random: { value: 'content', range: [1, 100] }
					},
					{
						type: 'latex',
						title: '\\log_ba',
						random: { value: 'both', range: [2, 10] }
					},
					{
						type: 'latex',
						title: '\\log_ba^m',
						random: { value: 'all', range: [2, 10] }
					}
				]
			}
		],
		questsCount: 5
	}
];

// export const speedChapters: Chapter[] = [
// 	{
// 		id: 'e5107f62-7c81-4b5b-b3a3-20b03b4efe42',
// 		title: 'Adição',
// 		operation: 'addition',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: '',

// 				quests: [
// 					{
// 						title: '0..99 + ?'
// 					},
// 					{
// 						title: '100..999 + ?'
// 					},
// 					{
// 						title: '1000..9999 + ?'
// 					},
// 					{
// 						title: '0..10,0 + ?'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 17
// 	},
// 	{
// 		id: 'd2127c09-1123-4b3e-89dc-37a5f9d14a46',
// 		title: 'Subtração',
// 		operation: 'subtraction',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: '',

// 				quests: [
// 					{
// 						title: '0..99 - ?'
// 					},
// 					{
// 						title: '100..999 + ?'
// 					},
// 					{
// 						title: '1000..9999 - ?'
// 					},
// 					{
// 						title: '0..10,0 - ?'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 13
// 	},
// 	{
// 		id: '3873bc9d-645f-44ed-8337-d9520f64e2cc',
// 		title: 'Multiplicação',
// 		operation: 'multiplication',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: 'Elementar',

// 				quests: [
// 					{
// 						title: '0..1 x ?'
// 					},
// 					{
// 						title: '2 x ?'
// 					},
// 					{
// 						title: '3 x ?'
// 					},
// 					{
// 						title: '4 x ?'
// 					},
// 					{
// 						title: '5 x ?'
// 					}
// 				]
// 			},
// 			{
// 				id: '9d23250b-f561-4068-ba55-59596330b6cc',
// 				title: 'Básico',
// 				quests: [
// 					{
// 						title: '6 x ?'
// 					},
// 					{
// 						title: '7 x ?'
// 					},
// 					{
// 						title: '8 x ?'
// 					},
// 					{
// 						title: '9 x ?'
// 					},
// 					{
// 						title: '10 x ?'
// 					}
// 				]
// 			},
// 			{
// 				id: '097a5f77-abec-41a1-901a-b13d0df20c40',
// 				title: 'Intermediário',
// 				quests: [
// 					{
// 						title: '11 x ?'
// 					},
// 					{
// 						title: '12 x ?'
// 					},
// 					{
// 						title: '13 x ?'
// 					},
// 					{
// 						title: '14 x ?'
// 					},
// 					{
// 						title: '15 x ?'
// 					}
// 				]
// 			},
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: 'Avançado',
// 				quests: [
// 					{
// 						title: '16 x ?'
// 					},
// 					{
// 						title: '17 x ?'
// 					},
// 					{
// 						title: '18 x ?'
// 					},
// 					{
// 						title: '19 x ?'
// 					},
// 					{
// 						title: '20 x ?'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 27
// 	},
// 	{
// 		id: '348a3328-2178-4550-9528-21d391a44363',
// 		title: 'Divisão',
// 		operation: 'division',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: 'Elementar',
// 				quests: [
// 					{
// 						type: 'latex',
// 						title: '0 \\div ?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '? \\div 1'
// 					},

// 					{
// 						type: 'latex',
// 						title: '? \\div 10'
// 					}
// 				]
// 			},
// 			{
// 				id: '9d23250b-f561-4068-ba55-59596330b6cc',
// 				title: 'Básico',
// 				quests: [
// 					{
// 						type: 'latex',
// 						title: '?\\div2'
// 					},
// 					{
// 						type: 'latex',
// 						title: '?\\div3'
// 					},
// 					{
// 						type: 'latex',
// 						title: '?\\div4'
// 					},
// 					{
// 						type: 'latex',
// 						title: '?\\div5'
// 					}
// 				]
// 			},
// 			{
// 				id: '097a5f77-abec-41a1-901a-b13d0df20c40',
// 				title: 'Intermediário',
// 				quests: [
// 					{
// 						type: 'latex',
// 						title: '6\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '7\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '8\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '9\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '10\\div?'
// 					}
// 				]
// 			},
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: 'Avançado',
// 				quests: [
// 					{
// 						type: 'latex',
// 						title: '1\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '2\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '3\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '4\\div?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '5\\div?'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 3
// 	},
// 	{
// 		id: 'a9e3fdc9-516c-4abe-b81b-68a86fb1e757',
// 		title: 'Fração',
// 		operation: 'fraction',
// 		sections: [
// 			{
// 				id: '2e2845d3-70c0-474c-ae2b-bbdc73b195e9',
// 				title: '',
// 				quests: [
// 					{
// 						title: '+'
// 					},
// 					{
// 						title: '-'
// 					},
// 					{
// 						title: 'x'
// 					},
// 					{
// 						title: '÷'
// 					},
// 					{
// 						title: '>'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 6
// 	},
// 	{
// 		id: '132d6e71-7ee4-4dba-a820-727d901465a9',
// 		title: 'Exponenciação',
// 		operation: 'exponentiation',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: '',
// 				quests: [
// 					{ type: 'latex', title: '0..1 ^ ?' },
// 					{
// 						type: 'latex',
// 						title: '? ^ {0..1}'
// 					},
// 					{
// 						type: 'latex',
// 						title: '2 ^ ?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '? ^ 2'
// 					},
// 					{
// 						type: 'latex',
// 						title: '? ^ ?'
// 					},
// 					{
// 						title: 'x'
// 					},
// 					{
// 						title: '÷'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 12
// 	},
// 	{
// 		id: '12e59e97-0066-4164-9951-77b81097021b',
// 		title: 'Radiciação',
// 		operation: 'root',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: '',
// 				quests: [
// 					{
// 						type: 'latex',
// 						title: '\\sqrt{}'
// 					},
// 					{
// 						type: 'latex',
// 						title: '\\sqrt[3]{}'
// 					},
// 					{
// 						type: 'latex',
// 						title: '√^ ?'
// 					},
// 					{
// 						type: 'latex',
// 						title: '∛ ^ ?'
// 					},

// 					{
// 						title: 'x'
// 					},
// 					{
// 						title: '÷'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 6
// 	},
// 	{
// 		id: '3d62e081-a515-4675-baaf-6b0e260de2e7',
// 		title: 'Logaritmação',
// 		operation: 'logarithm',
// 		sections: [
// 			{
// 				id: 'e1e8fc8c-7c1d-4bdb-89c2-d5d39bcc17cb',
// 				title: '',
// 				quests: [
// 					{
// 						type: 'latex',
// 						title: '\\log_b0..1'
// 					},
// 					{
// 						type: 'latex',
// 						title: '\\log_2a'
// 					},
// 					{
// 						type: 'latex',
// 						title: '\\log_3a'
// 					},
// 					{
// 						type: 'latex',
// 						title: '\\log_ba'
// 					},
// 					{
// 						title: 'x'
// 					},
// 					{
// 						title: '÷'
// 					},
// 					{
// 						type: 'latex',
// 						title: '\\log_ba^m'
// 					},
// 					{
// 						type: 'latex',
// 						title: 'base'
// 					}
// 				]
// 			}
// 		],
// 		questsCount: 17
// 	}
// ];
