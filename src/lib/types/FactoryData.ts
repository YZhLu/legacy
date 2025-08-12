

export interface Block {
	id: string;
	type: string;
	data: {
		text: string;
		// Outros campos de dados podem ser adicionados conforme necessário
	};
}

export interface InputObject {
	time: number;
	blocks: Block[];
}

export type RandomParams = {
	min: number;
	max: number;
	round: number;
	type?: string;
	hasSignal?: boolean;
};

export type FactoryData = {
	//editorBody: InputObject;
	body: string;
	ans: string;
	scope: string;
	
};

export type Scope = {
	[id: string]: string | RandomParams;
};
