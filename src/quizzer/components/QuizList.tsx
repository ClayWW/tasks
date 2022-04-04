import React from "react";
import { Quiz } from "../../interfaces/quiz";
import { Stack } from "react-bootstrap";
import { ViewQuizzes } from "./ViewQuizzes";

export function QuizList({
    quizzes,
    editQuiz,
    deleteQuiz
}: {
    quizzes: Quiz[];
    editQuiz: (id: number, newOne: Quiz) => void;
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id} className="bg-light border m-2 p-2">
                    <ViewQuizzes
                        quiz={quiz}
                        editQuiz={editQuiz}
                        deleteQuiz={deleteQuiz}
                    ></ViewQuizzes>
                </div>
            ))}
        </Stack>
    );
}
