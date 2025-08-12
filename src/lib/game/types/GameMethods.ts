export type GameMethods = {
	playAudioHit: () => void;
	playAudioMiss: () => void;
	nextRound: () => void;
	runStep: () => void;
	handleEnd: () => void;
};
