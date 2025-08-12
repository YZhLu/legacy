import type { MathNode, MathContent } from './types';

export function getNodeContent(node: MathNode): MathContent[] {
    switch (node.type) {
        case 'power':
            return [node.base, node.exp];
        case 'fraction':
            return [node.num, node.den];
        case 'root':
            return [node.index, node.rad];
        default:
            return [];
    }
}