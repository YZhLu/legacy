import { writable } from 'svelte/store';
import type { MathNode } from './new/interpreter/index';

export const base = writable('');

export const exp = writable('');

export const expression = writable('');

export const finalString = writable('');

export const isBaseMode = writable(false);

export const isExpMode = writable(false);

export const btnLabel = writable('check'); //x^□');

export const isPowerMode = writable(false);

export const currentInput = writable('');

export const isRootMode = writable(false);
export const isIndexMode = writable(false);
export const isRadicandMode = writable(false);
export const index = writable('');
export const radicand = writable('');
// export const btnLabel = writable('□√x');
export const rootIndex = writable('');
export const rootRadicand = writable('');
export const isFractionMode = writable(false);
export const isNumeratorMode = writable(false);
export const isDenominatorMode = writable(false);
export const numerator = writable('');
export const denominator = writable('');
export const isNegativeMode = writable(false);
export const isDecimalMode = writable(false);
export const isPercentMode = writable(false);
export const isParenthesisMode = writable(false);
export const isLeftParenthesisMode = writable(false);
export const isRightParenthesisMode = writable(false);
export const isOperatorMode = writable(false);
export const isAdditionMode = writable(false);
export const isSubtractionMode = writable(false);
export const isMultiplicationMode = writable(false);
export const isDivisionMode = writable(false);
export const isExponentiationMode = writable(false);

interface FractionExpression {
	num: string;
	den: string;
}

export const powerStack = writable<string[]>([]);
export const displayExpression = writable<string[]>([]);
export const fractionStack = writable<FractionExpression>({ num: '', den: '' });


export const ast = writable<MathNode>({} as MathNode);