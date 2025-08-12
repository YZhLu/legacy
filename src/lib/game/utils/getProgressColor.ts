export default function getProgressColor(timeBarProgress: number) {
		
        if (timeBarProgress > 66) {
			return 'bg-green-500'; // Verde (mais tempo restante)
		} else if (timeBarProgress > 25 && timeBarProgress <= 66) {
			return 'bg-yellow-500'; // Amarelo (menos tempo restante)
		} else {
			return 'bg-red-500'; // Vermelho (urgente)
		}
	}