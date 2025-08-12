export default function formatElapsedTime(ms: number): string {
	const totalSeconds = Math.floor(ms / 1000);
	
	const seconds = totalSeconds;

    return `${seconds.toString().padStart(2, '0')}"${ms%1000}`;
	// return `${minutes}'${seconds.toString().padStart(2, '0')}"`;
}
