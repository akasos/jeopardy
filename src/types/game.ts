export interface Question {
    points: number;
    questionText: string;
    answer: string;
    isAnswered: boolean;
}

export interface Category {
    name: string;
    questions: Question[];
}

export interface JeopardyGame {
    categories: Category[];
}