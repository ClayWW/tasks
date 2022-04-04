import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { MultipleChoiceQuestion } from "./MCQuestion";
import { ShortAnswerQuestion } from "./SAQuestion";

export function ViewQuestions({
    question,
    changePoints,
    showAll
}: {
    question: Question;
    changePoints: (changeTo: number) => void;
    showAll: boolean;
}): JSX.Element {
    return showAll || question.published ? (
        <Container>
            <Row>
                <Col>
                    <h3>{question.name}</h3>
                </Col>
            </Row>
            <Row>
                <p>Points Available: {question.points}</p>
                <h4>{question.body}</h4>
            </Row>
            <Row>
                {question.type === "short_answer_question" ? (
                    <ShortAnswerQuestion
                        expectedAnswer={question.expected}
                        changePoints={changePoints}
                        totalPoints={question.points}
                    ></ShortAnswerQuestion>
                ) : (
                    <MultipleChoiceQuestion
                        expectedAnswer={question.expected}
                        changePoints={changePoints}
                        totalPoints={question.points}
                        options={question.options}
                    ></MultipleChoiceQuestion>
                )}
            </Row>
        </Container>
    ) : (
        <div></div>
    );
}
