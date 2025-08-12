import { describe, it, expect } from 'vitest';
import { updateMathNodeById, deleteNodeById, insertChain } from '../operations';
import type { MathNode, NodeMap, PowerNode, FractionNode, RootNode } from '../types';
import { isPowerNode, isFractionNode, isRootNode } from '../guards';
import { getNodeContent } from '../utils';

describe('Math Node Operations', () => {
    // Helper para criar o nodeMap inicial
    function createNodeMap(nodes: MathNode[]): NodeMap {
        const map = new Map<string, MathNode>();
        nodes.forEach(node => map.set(node.id, node));
        return map;
    }

    // Test fixtures
    const simplePower: PowerNode = {
        id: '1',
        type: 'power',
        base: { value: '2', node: null },
        exp: { value: '3', node: null }
    };

    const nestedFraction: FractionNode = {
        id: '2',
        type: 'fraction',
        num: { value: null, node: simplePower },
        den: { value: '4', node: null }
    };

    describe('updateMathNodeById', () => {
        it('should update a simple node', () => {
            const nodeMap = createNodeMap([simplePower]);
            const newPower: PowerNode = {
                id: '1',
                type: 'power',
                base: { value: '5', node: null },
                exp: { value: '3', node: null }
            };

            const mapNode = nodeMap.get('1');
            if (!mapNode) {
                throw new Error('Node not found in map');
            }

            const result = updateMathNodeById(
                mapNode,
                '1',
                { nodeToUpdate: newPower },
                nodeMap
            );

            if (isPowerNode(result)) {
                expect(result.base.value).toBe('5');
            } else {
                throw new Error('Result should be PowerNode');
            }

            const updatedNode = nodeMap.get('1');
            if (!updatedNode) {
                throw new Error('Updated node not found in map');
            }
            if (isPowerNode(updatedNode)) {
                expect(updatedNode.base.value).toBe('5');
            } else {
                throw new Error('Map node should be PowerNode');
            }
        });
    });

    describe('deleteNodeById', () => {
        it('should delete a node and replace with placeholder', () => {
            const nodeMap = createNodeMap([simplePower, nestedFraction]);
            
            if (!nestedFraction.num.node) {
                throw new Error('Nested node not found');
            }
            
            const { newRoot } = deleteNodeById(nestedFraction, '1', nodeMap);

            expect(nodeMap.has('1')).toBe(false);
            
            if (isFractionNode(newRoot)) {
                if (!newRoot.num.node) {
                    throw new Error('Num node is null');
                }
                if (isPowerNode(newRoot.num.node)) {
                    expect(newRoot.num.node.type).toBe('power');
                    expect(newRoot.num.node.base.value).toBe('\\square');
                } else {
                    throw new Error('Num node should be PowerNode');
                }
            } else {
                throw new Error('Root should be FractionNode');
            }
        });
    });

    describe('insertChain', () => {
        it('should insert a new chain of nodes', () => {
            const nodeMap = createNodeMap([simplePower]);
            
            const newChain: RootNode = {
                id: '3',
                type: 'root',
                index: { value: '2', node: null },
                rad: { value: '9', node: null }
            };

            const { newRoot, updatedMap } = insertChain(
                simplePower,
                '1',
                newChain,
                nodeMap
            );

            expect(updatedMap.has('3')).toBe(true);
            expect(newRoot.id).toBe('3');
            
            if (isRootNode(newRoot)) {
                expect(newRoot.index.value).toBe('2');
            } else {
                throw new Error('New root should be RootNode');
            }
        });
    });

    // Testes para casos complexos
    describe('Complex operations', () => {
        it('should handle deeply nested structures', () => {
            const deepStructure: PowerNode = {
                id: '1',
                type: 'power',
                base: { 
                    value: null, 
                    node: {
                        id: '2',
                        type: 'fraction',
                        num: { value: '1', node: null },
                        den: { 
                            value: null,
                            node: {
                                id: '3',
                                type: 'root',
                                index: { value: '2', node: null },
                                rad: { value: '4', node: null }
                            }
                        }
                    }
                },
                exp: { value: '2', node: null }
            };

            const nodeMap = createNodeMap([deepStructure]);
            
            // We need to add all nested nodes to the map
            function addNestedNodes(node: MathNode) {
                nodeMap.set(node.id, node);
                const contents = getNodeContent(node);
                contents.forEach(content => {
                    if (content.node) {
                        addNestedNodes(content.node);
                    }
                });
            }
            addNestedNodes(deepStructure);

            const newRoot: RootNode = {
                id: '3',
                type: 'root',
                index: { value: '3', node: null },
                rad: { value: '9', node: null }
            };

            updateMathNodeById(
                deepStructure,
                '3',
                { nodeToUpdate: newRoot },
                nodeMap
            );

            const resultNode = nodeMap.get('3');
            if (!resultNode) {
                throw new Error('Result node not found in map');
            }
            if (isRootNode(resultNode)) {
                expect(resultNode.type).toBe('root');
                expect(resultNode.index.value).toBe('3');
            } else {
                throw new Error('Updated node should be RootNode');
            }
        });
    });
});