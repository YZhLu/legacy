export type RootConfig = [number, number, number]; // [índice, base, sinal]
// import { random, round } from 'mathjs';

/**
 * Mapeamento de números para seus nomes ordinais femininos em português
 * Usado para descrever raízes: "raiz quadrada", "raiz cúbica", etc.
 */
export const rootNames: Record<number, string> = {
    2: 'quadrada',
    3: 'cúbica',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sétima',
    8: 'oitava',
    9: 'nona',
    10: 'décima',
    11: 'décima primeira',
    12: 'décima segunda',
    13: 'décima terceira',
    14: 'décima quarta',
    15: 'décima quinta',
    16: 'décima sexta',
    17: 'décima sétima',
    18: 'décima oitava',
    19: 'décima nona',
    20: 'vigésima'
};

/**
 * Gera o texto por extenso para uma raiz
 */
export function getRootName(root: number): string {
    return rootNames[root] || `${root}ª`;
}

/**
 * Gera uma frase padrão para resposta de raiz n-ésima
 */
export function generateRootAnswer(root: number, result: number, base: number): string {
    const rootName = getRootName(root);
    return `A raiz ${rootName} de ${result} é igual a ${base}; o que equivale a ${base} elevado à ${rootName} potência ser igual a ${result}.`;
}

// export function rdn(min: number, max: number, precision = 0): number {
//     return round(random(min, max, precision));
// }