import type { MathNode, PowerNode, FractionNode, RootNode } from './types';

export function isPowerNode(node: MathNode): node is PowerNode {
    return node.type === 'power';
}

export function isFractionNode(node: MathNode): node is FractionNode {
    return node.type === 'fraction';
}

export function isRootNode(node: MathNode): node is RootNode {
    return node.type === 'root';
}