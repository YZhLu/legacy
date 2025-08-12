import type { NodeMap } from './nodeMap';

export type MathNodeType = 'power' | 'fraction' | 'root';

export interface MathContent {
	value: string | null;
	node: MathNode | null;
}

export interface BaseNode {
	id: string;
	type: MathNodeType;
}

export interface PowerNode extends BaseNode {
	type: 'power';
	base: MathContent;
	exp: MathContent;
}

export interface FractionNode extends BaseNode {
	type: 'fraction';
	num: MathContent;
	den: MathContent;
}

export interface RootNode extends BaseNode {
	type: 'root';
	index: MathContent;
	rad: MathContent;
}

export type MathNode = PowerNode | FractionNode | RootNode;

export interface UpdateOptions {
	value?: string;
	nodeToUpdate?: MathNode;
}

export type { NodeMap };
