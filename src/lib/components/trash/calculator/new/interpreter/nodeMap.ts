import type { MathContent, MathNode } from "../type";

export type NodeMap = Map<string, MathNode>;

export function buildNodeMap(root: MathNode): NodeMap {
    const map = new Map<string, MathNode>();
    
    function traverse(node: MathNode) {
        map.set(node.id, node);
        
        const contents: MathContent[] = [];
        switch (node.type) {
            case 'power':
                contents.push(node.base, node.exp);
                break;
            case 'fraction':
                contents.push(node.num, node.den);
                break;
            case 'root':
                contents.push(node.index, node.rad);
                break;
        }
        
        contents.forEach(content => {
            if (content.node) traverse(content.node);
        });
    }
    
    traverse(root);
    return map;
}
