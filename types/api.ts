 export interface Chapter {
    id: number;
    name: string;
    canPlay: boolean;
    isFinished: boolean;
    chapterOrder: number;
    isExam: boolean;
    isQuiz: boolean;
    isExercise?: boolean;
    isPremium: boolean;
}

export interface Unit {
    id: number;
    name: string;
    description: string;
    order: number;
    isFinished: boolean;
    canPlay: boolean;
    totalXps: number;
    chapters: Chapter[];
}

export interface ApiCourse {
    id: number;
    name: string;
    description: string;
    duration: string;
    totalLessons: number;
    finishedLessons: number;
    units: Unit[];
}
