export type MathNodeType = 'power' | 'fraction' | 'root';

export interface BaseMathNode {
    id: string;
    type: MathNodeType;
    deep: number;
    maxDeep: number;
}

export interface PowerNode extends BaseMathNode {
    type: 'power';
    value: string;
    exp: MathContent;
}

export interface FractionNode extends BaseMathNode {
    type: 'fraction';
    num: MathContent;
    den: MathContent;
}

export interface RootNode extends BaseMathNode {
    type: 'root';
    index: MathContent;
    rad: MathContent;
}

export interface MathContent {
    value?: string;
    node: MathNode | null;
}

export type MathNode = PowerNode | FractionNode | RootNode;