/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipQuestion(): void {
        setQuestion(
            question === "short_answer_question"
                ? "multiple_choice_question"
                : question === "multiple_choice_question"
                    ? "short_answer_question"
                    : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={flipQuestion}>Change Type</Button>
            {question === "multiple_choice_question" ?
                <span>Multiple Choice</span> :
                <span>Short Answer</span>
            }
        </div>
    );
}
