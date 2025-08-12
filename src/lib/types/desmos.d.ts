declare global {
    namespace Desmos {
        // interface Calculator {
        //     setExpression(options: ExpressionOptions): void;
        //     setMathBounds(bounds: Bounds): void;
        //     destroy(): void;
        // }

        interface ExpressionOptions {
            id: string;
            latex: string;
            color?: string;
        }

        interface Bounds {
            left: number;
            right: number;
            bottom: number;
            top: number;
        }

        interface Colors {
            BLUE: string;
            RED: string;
            GREEN: string;
            PURPLE: string;
            ORANGE: string;
        }

        interface GraphingCalculatorOptions {
            expressions: boolean;
            settingsMenu: boolean;
            zoomButtons: boolean;
            lockViewport: boolean;
            showGrid: boolean;
            showXAxis: boolean;
            showYAxis: boolean;
        }

        const Colors: Colors;
        function GraphingCalculator(
            element: HTMLElement, 
            options?: Partial<GraphingCalculatorOptions>
        ): Calculator;
    }

    interface Window {
        Desmos: typeof Desmos;
    }
}

export {};