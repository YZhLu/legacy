interface QuestAttempt {
	questId: string;
	grade: number;
	hits: number;
	misses: number;
	duration: number;
	startedAt: string;
	endedAt: string;
	id: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface QuestStats {
	grade: number;
	attempts: number;
	errors: number;
	hits: number;
	avgTime: number;
	totalTime: number;
}

export function calculateQuestStats(attempts: QuestAttempt[]): Record<string, QuestStats> {
	const sortedAttempts = [...attempts].sort((a, b) => 
        new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime()
    );

    const stats: Record<string, QuestStats> = {};
    
	sortedAttempts.forEach((attempt) => {
		if (!stats[attempt.questId]) {
			stats[attempt.questId] = {
				grade: attempt.grade/10,
				attempts: 0,
				errors: 0,
				hits: 0,
				avgTime: 0,
				totalTime: 0
			};
		}

		const current = stats[attempt.questId];
		current.attempts += 1;
		current.errors += attempt.misses;
		current.hits += attempt.hits;
		current.totalTime += attempt.duration;
		current.avgTime = current.totalTime / current.attempts;

		// Update grade (keeping the highest grade)
		//current.grade = attempt.grade;
	});

	return stats;
}
