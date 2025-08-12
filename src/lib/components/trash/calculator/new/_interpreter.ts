import type { FractionNode, MathContent, MathNode, PowerNode, RootNode } from "./type";
import { type NodeMap } from './interpreter/nodeMap';

interface UpdateOptions {
    value?: string;
    nodeToUpdate?: MathNode;
}

// Add nodeMap parameter to updateMathNodeById
export function updateMathNodeById(
    root: MathNode,
    targetId: string,
    options: UpdateOptions,
    nodeMap: NodeMap
): MathNode {
    // Direct lookup in the map
    const targetNode = nodeMap.get(targetId);
    if (!targetNode) return root;

    if (root.id === targetId) {
        if (options.nodeToUpdate) {
            // Update the map with new node
            nodeMap.set(targetId, options.nodeToUpdate);
            return options.nodeToUpdate;
        }
        return root;
    }

    const newNode = { ...root };

    function updateContent(content: MathContent): MathContent {
        if (!content.node) return content;
        const updatedNode = updateMathNodeById(content.node, targetId, options, nodeMap);
        return updatedNode === content.node ? content : { value: null, node: updatedNode };
    }

    // Type guard functions
    function isPowerNode(node: MathNode): node is PowerNode {
        return node.type === 'power';
    }

    function isFractionNode(node: MathNode): node is FractionNode {
        return node.type === 'fraction';
    }

    function isRootNode(node: MathNode): node is RootNode {
        return node.type === 'root';
    }

    // Now TypeScript knows the exact type in each case
    switch (root.type) {
        case 'power':
            if (isPowerNode(newNode)) {
                newNode.base = updateContent(root.base);
                newNode.exp = updateContent(root.exp);
            }
            break;
        case 'fraction':
            if (isFractionNode(newNode)) {
                newNode.num = updateContent(root.num);
                newNode.den = updateContent(root.den);
            }
            break;
        case 'root':
            if (isRootNode(newNode)) {
                newNode.index = updateContent(root.index);
                newNode.rad = updateContent(root.rad);
            }
            break;
    }

    return newNode;
}

// Add helper function to update node and map
export function updateNodeAndMap(
    root: MathNode,
    targetId: string,
    options: UpdateOptions,
    nodeMap: NodeMap
): { newRoot: MathNode; updatedMap: NodeMap } {
    const newRoot = updateMathNodeById(root, targetId, options, nodeMap);
    
    // If we're replacing a node, update all affected nodes in the map
    if (options.nodeToUpdate) {
        // Remove old node and its children from map
        const removeFromMap = (node: MathNode) => {
            nodeMap.delete(node.id);
            const content = getNodeContent(node);
            content.forEach(c => {
                if (c.node) removeFromMap(c.node);
            });
        };

        const oldNode = nodeMap.get(targetId);
        if (oldNode) removeFromMap(oldNode);

        // Add new node and its children to map
        const addToMap = (node: MathNode) => {
            nodeMap.set(node.id, node);
            const content = getNodeContent(node);
            content.forEach(c => {
                if (c.node) addToMap(c.node);
            });
        };

        addToMap(options.nodeToUpdate);
    }

    return { newRoot, updatedMap: nodeMap };
}

// Helper to get node content based on type
function getNodeContent(node: MathNode): MathContent[] {
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

export function interpretMathNode(mathNode: MathNode): string {
    function interpretContent(content: MathContent): string {
        if (content.value !== null) return content.value;
        if (content.node !== null) return interpretMathNode(content.node);
        return '\\square';
    }

    let base: string, exp: string, num: string, den: string, index: string, rad: string;

    switch (mathNode.type) {
        case 'power':
            base = interpretContent(mathNode.base);
            exp = interpretContent(mathNode.exp);
            return `${base}^{${exp}}`;

        case 'fraction':
            num = interpretContent(mathNode.num);
            den = interpretContent(mathNode.den);
            return `\\frac{${num}}{${den}}`;

        case 'root':
            index = interpretContent(mathNode.index);
            rad = interpretContent(mathNode.rad);
            return `\\sqrt[${index}]{${rad}}`;

        default:
            return '\\square';
    }
}

export function insertChain(
    root: MathNode,
    targetId: string,
    newChain: MathNode,
    nodeMap: NodeMap
): { newRoot: MathNode; updatedMap: NodeMap } {
    // Primeiro adicionamos a nova cadeia ao mapa
    function addToMap(node: MathNode) {
        nodeMap.set(node.id, node);
        const content = getNodeContent(node);
        content.forEach(c => {
            if (c.node) addToMap(c.node);
        });
    }
    addToMap(newChain);

    // Então atualizamos o nó alvo
    return updateNodeAndMap(root, targetId, { nodeToUpdate: newChain }, nodeMap);
}

// Type guard functions
function isPowerNode(node: MathNode): node is PowerNode {
    return node.type === 'power';
}

function isFractionNode(node: MathNode): node is FractionNode {
    return node.type === 'fraction';
}

function isRootNode(node: MathNode): node is RootNode {
    return node.type === 'root';
}

// Then update deleteNodeById function to use type guards
export function deleteNodeById(
    root: MathNode,
    targetId: string,
    nodeMap: NodeMap
): { newRoot: MathNode; updatedMap: NodeMap } {
    // Se for o nó raiz, não podemos deletar
    if (root.id === targetId) {
        return { newRoot: root, updatedMap: nodeMap };
    }

    const newNode = { ...root };

    function replaceWithSquare(content: MathContent): MathContent {
        if (!content.node) return content;
        if (content.node.id === targetId) {
            return { value: '\\square', node: null };
        }
        const updatedNode = deleteNodeById(content.node, targetId, nodeMap);
        nodeMap = updatedNode.updatedMap;
        return content.node === updatedNode.newRoot ? 
            content : 
            { value: null, node: updatedNode.newRoot };
    }

    switch (root.type) {
        case 'power':
            if (isPowerNode(newNode)) {
                newNode.base = replaceWithSquare(root.base);
                newNode.exp = replaceWithSquare(root.exp);
            }
            break;
        case 'fraction':
            if (isFractionNode(newNode)) {
                newNode.num = replaceWithSquare(root.num);
                newNode.den = replaceWithSquare(root.den);
            }
            break;
        case 'root':
            if (isRootNode(newNode)) {
                newNode.index = replaceWithSquare(root.index);
                newNode.rad = replaceWithSquare(root.rad);
            }
            break;
    }

    // Remove o nó do mapa
    nodeMap.delete(targetId);

    return { newRoot: newNode, updatedMap: nodeMap };
}
