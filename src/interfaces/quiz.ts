import { Question } from "./question";

export interface Quiz {
    name: string;
    id: number;
    description: string;
    points: number;
    started: boolean;
    questions: Question[];
}
