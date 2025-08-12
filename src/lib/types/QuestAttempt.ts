export type QuestAttempt =  {
    id: string;
    startedAt: Date;
    endedAt: Date;
    duration: number;
    grade: number;
    hits: number;
    misses: number;
    volume: number;
    speed: number;
    variation: number;
    studentId: string;
    questId: string;
    bookId: string;
}