 export interface ApiChapter {
    id: number;
    name: string;
    canPlay: boolean;
    isFinished: boolean;
    chapterOrder: number;
    isExam?: boolean;
    isQuiz?: boolean;
    isExercise?: boolean;
    isPremium?: boolean;
}

export interface ApiUnit {
    id: number;
    name: string;
    description: string;
    order: number;
    isFinished: boolean;
    canPlay: boolean;
    totalXps: number;
    chapters: ApiChapter[];
}

export interface ApiCourse {
    id: number;
    name: string;
    description: string;
    duration: string;
    totalLessons: number;
    finishedLessons: number;
    units: ApiUnit[];
}
