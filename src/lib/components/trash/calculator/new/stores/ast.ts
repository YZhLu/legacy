import { writable, type Writable } from 'svelte/store';
import { 
    updateMathNodeById, 
    interpretMathNode,
    deleteNodeById,
    insertChain,
    type MathNode, 
    type PowerNode, 
    type NodeMap
} from '../interpreter';

import { isPowerNode } from '../interpreter/guards';

interface AstState {
    root: MathNode | null;
    nodeMap: NodeMap;
    latex: string;
}

interface AstStore extends Writable<AstState> {
    setPower: (base?: string | MathNode) => string;
    setBase: (nodeId: string, base: string | MathNode) => void;
    setExp: (nodeId: string, exp: string | MathNode) => void;
    deleteNode: (nodeId: string) => void;
    insertNode: (targetId: string, newNode: MathNode) => void;
    reset: () => void;
}

// Create unique IDs for nodes
function createId(): string {
    return `node-${Date.now()}-${crypto.randomUUID()}`;
}

function buildNodeMap(node: MathNode): NodeMap {
    const nodeMap = new Map<string, MathNode>();
    
    function addNodeToMap(currentNode: MathNode) {
        nodeMap.set(currentNode.id, currentNode);
        
        if (isPowerNode(currentNode)) {
            if (currentNode.base.node) {
                addNodeToMap(currentNode.base.node);
            }
            if (currentNode.exp.node) {
                addNodeToMap(currentNode.exp.node);
            }
        }
    }
    
    addNodeToMap(node);
    return nodeMap;
}

function createPowerNode(base: string | MathNode = ''): PowerNode {
    return {
        id: createId(),
        type: 'power',
        base: typeof base === 'string' 
            ? { value: base || '\\square', node: null }
            : { value: null, node: base },
        exp: { value: '\\square', node: null }
    };
}

function createAstStore(): AstStore {
    const { subscribe, set, update } = writable<AstState>({
        root: null,
        nodeMap: new Map(),
        latex: '\\square'
    });

    return {
        subscribe,
        set,
        update,
        setPower: (base?: string | MathNode) => {
            const newNode = createPowerNode(base);
            
            update(state => {
                if (!state.root) {
                    return {
                        root: newNode,
                        nodeMap: buildNodeMap(newNode),
                        latex: interpretMathNode(newNode)
                    };
                } else {
                    const currentRoot = state.root;
                    if (isPowerNode(currentRoot)) {
                        const updatedRoot: PowerNode = {
                            ...currentRoot,
                            exp: { value: null, node: newNode }
                        };
                        
                        return {
                            root: updatedRoot,
                            nodeMap: buildNodeMap(updatedRoot),
                            latex: interpretMathNode(updatedRoot)
                        };
                    }
                    return state;
                }
            });
            
            return newNode.id;
        },

        setBase: (nodeId: string, base: string | MathNode) => {
            update(state => {
                if (!state.root) return state;

                const node = state.nodeMap.get(nodeId);
                if (!node || !isPowerNode(node)) return state;

                const updatedNode: PowerNode = {
                    ...node,
                    base: typeof base === 'string'
                        ? { value: base, node: null }
                        : { value: null, node: base }
                };

                const updatedRoot = updateMathNodeById(
                    state.root,
                    nodeId,
                    { nodeToUpdate: updatedNode },
                    state.nodeMap
                );

                return {
                    root: updatedRoot,
                    nodeMap: buildNodeMap(updatedRoot),
                    latex: interpretMathNode(updatedRoot)
                };
            });
        },

        setExp: (nodeId: string, exp: string | MathNode) => {
            update(state => {
                if (!state.root) return state;

                const node = state.nodeMap.get(nodeId);
                if (!node || !isPowerNode(node)) return state;

                const updatedNode: PowerNode = {
                    ...node,
                    exp: typeof exp === 'string'
                        ? { value: exp, node: null }
                        : { value: null, node: exp }
                };

                const updatedRoot = updateMathNodeById(
                    state.root,
                    nodeId,
                    { nodeToUpdate: updatedNode },
                    state.nodeMap
                );

                return {
                    root: updatedRoot,
                    nodeMap: buildNodeMap(updatedRoot),
                    latex: interpretMathNode(updatedRoot)
                };
            });
        },

        deleteNode: (nodeId: string) => {
            update(state => {
                if (!state.root) return state;

                const { newRoot, updatedMap } = deleteNodeById(state.root, nodeId, state.nodeMap);
                return {
                    root: newRoot,
                    nodeMap: updatedMap,
                    latex: interpretMathNode(newRoot)
                };
            });
        },

        insertNode: (targetId: string, newNode: MathNode) => {
            update(state => {
                if (!state.root) return state;

                const { newRoot, updatedMap } = insertChain(
                    state.root,
                    targetId,
                    newNode,
                    state.nodeMap
                );

                return {
                    root: newRoot,
                    nodeMap: updatedMap,
                    latex: interpretMathNode(newRoot)
                };
            });
        },

        reset: () => set({
            root: null,
            nodeMap: new Map(),
            latex: '\\square'
        })
    };
}

export const ast = createAstStore();