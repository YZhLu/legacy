let time = 0; // Tempo inicial em milissegundos

let timer: ReturnType<typeof setInterval> | null = null; // Usando o tipo correto para setInterval no navegador

let lastPartialTime = 0; // Tempo parcial da última volta

// Função para iniciar o cronômetro
export const startTimer = (onUpdate: (time: number, lastPartialTime: number) => void): void => {
	if (!timer) {
		timer = setInterval(() => {
			time += 10; // Incrementa a cada 10 milissegundos
			lastPartialTime += 10;
			onUpdate(time, lastPartialTime); // Atualiza o componente com o novo tempo
		}, 10);
	}
};

// Função para pausar o cronômetro
export const pauseTimer = (): void => {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
};

// Função para resetar o cronômetro
export const stopTimer = (onUpdate: (time: number, lastPartialTime: number) => void): void => {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
	time = 0;
	lastPartialTime = 0;
	onUpdate(time, lastPartialTime); // Reseta o tempo e atualiza o componente
};

export const resetTimer = (onUpdate: (time: number, lastPartialTime: number) => void): void => {
	time = 0;
	lastPartialTime = 0;
	onUpdate(time, lastPartialTime); // Atualiza o componente com os tempos resetados
};

// Função para reiniciar o cronômetro sem pausá-lo (reseta apenas o tempo parcial)
export const resetPartialTime = (
	onUpdate: (time: number, lastPartialTime: number) => void
): void => {
	lastPartialTime = 0; // Reseta apenas o tempo parcial
	onUpdate(time, lastPartialTime); // Atualiza o componente com o tempo total e o tempo parcial resetado
}; 

