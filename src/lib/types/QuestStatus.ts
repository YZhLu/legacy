export type QuestStatus =  {
    readonly id?: string;
    status: number;
    studentId: string;
    questId: string;
    bookId: string;
    createdAt?: Date;
    updatedAt?: Date;

   
}