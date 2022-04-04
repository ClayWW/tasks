import React from "react";
import { Question } from "../../interfaces/question";
import { Stack } from "react-bootstrap";
import { ViewQuestions } from "./ViewQuestions";

export function QuestionList({
    questions,
    changePoints,
    showAll
}: {
    questions: Question[];
    changePoints: (changeTo: number) => void;
    showAll: boolean;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <ViewQuestions
                        question={question}
                        changePoints={changePoints}
                        showAll={showAll}
                    ></ViewQuestions>
                </div>
            ))}
        </Stack>
    );
}
