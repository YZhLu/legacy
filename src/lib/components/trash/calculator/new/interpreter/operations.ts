import type { MathNode, NodeMap, UpdateOptions, MathContent } from './types';
import { getNodeContent } from './utils';
import { isPowerNode, isFractionNode, isRootNode } from './guards';

export function updateMathNodeById(
    root: MathNode,
    targetId: string,
    options: UpdateOptions,
    nodeMap: NodeMap
): MathNode {
    const targetNode = nodeMap.get(targetId);
    if (!targetNode) return root;

    if (root.id === targetId) {
        if (options.nodeToUpdate) {
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

export function updateNodeAndMap(
    root: MathNode,
    targetId: string,
    options: UpdateOptions,
    nodeMap: NodeMap
): { newRoot: MathNode; updatedMap: NodeMap } {
    const newRoot = updateMathNodeById(root, targetId, options, nodeMap);
    
    if (options.nodeToUpdate) {
        const removeFromMap = (node: MathNode) => {
            nodeMap.delete(node.id);
            const content = getNodeContent(node);
            content.forEach(c => {
                if (c.node) removeFromMap(c.node);
            });
        };

        const oldNode = nodeMap.get(targetId);
        if (oldNode) removeFromMap(oldNode);

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

export function deleteNodeById(
    root: MathNode,
    targetId: string,
    nodeMap: NodeMap
): { newRoot: MathNode; updatedMap: NodeMap } {
    // Create a placeholder node of type 'power' (or any other type)
    const placeholder: MathNode = {
        id: `placeholder-${Date.now()}`,
        type: 'power',
        base: { value: '\\square', node: null },
        exp: { value: '\\square', node: null }
    };

    const newRoot = updateMathNodeById(root, targetId, 
        { nodeToUpdate: placeholder }, nodeMap);
    nodeMap.delete(targetId);
    return { newRoot, updatedMap: nodeMap };
}

export function insertChain(
    root: MathNode,
    targetId: string,
    newChain: MathNode,
    nodeMap: NodeMap
): { newRoot: MathNode; updatedMap: NodeMap } {
    function addToMap(node: MathNode) {
        nodeMap.set(node.id, node);
        const content = getNodeContent(node);
        content.forEach(c => {
            if (c.node) addToMap(c.node);
        });
    }
    addToMap(newChain);

    return updateNodeAndMap(root, targetId, { nodeToUpdate: newChain }, nodeMap);
}