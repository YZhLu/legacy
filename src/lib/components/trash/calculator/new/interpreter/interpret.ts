import type { MathNode, MathContent } from './types';

export function interpretMathNode(mathNode: MathNode): string {
    function interpretContent(content: MathContent): string {
        if (content.value !== null) return content.value;
        if (content.node !== null) return interpretMathNode(content.node);
        return '\\square';
    }

    switch (mathNode.type) {
        case 'power':
            return `${interpretContent(mathNode.base)}^{${interpretContent(mathNode.exp)}}`;
        case 'fraction':
            return `\\frac{${interpretContent(mathNode.num)}}{${interpretContent(mathNode.den)}}`;
        case 'root':
            return `\\sqrt[${interpretContent(mathNode.index)}]{${interpretContent(mathNode.rad)}}`;
        default:
            return '\\square';
    }
}