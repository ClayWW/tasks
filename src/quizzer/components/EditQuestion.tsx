import React from "react";
import { Question } from "../../interfaces/question";
import { ListGroup, Form, Container, Row, Col } from "react-bootstrap";

interface QuestionEdit {
    question: Question;
    setQuestion: (id: number, newQuestion: Question) => void;
}

export function EditQuestionName({
    question,
    setQuestion
}: QuestionEdit): JSX.Element {
    return (
        <Form.Control
            value={question.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    name: event.target.value
                })
            }
        />
    );
}

export function EditQuestionBody({
    question,
    setQuestion
}: QuestionEdit): JSX.Element {
    return (
        <Form.Control
            value={question.body}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    body: event.target.value
                })
            }
        />
    );
}

export function EditQuestionExpected({
    question,
    setQuestion
}: QuestionEdit): JSX.Element {
    return (
        <Form.Control
            value={question.expected}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    expected: event.target.value
                })
            }
        />
    );
}

export function EditQuestionPoints({
    question,
    setQuestion
}: QuestionEdit): JSX.Element {
    return (
        <Form.Control
            value={question.points}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    points: parseInt(event.target.value)
                })
            }
        />
    );
}

export function EditQuestionOptions({
    question,
    setQuestion
}: QuestionEdit): JSX.Element {
    return (
        <Form.Control
            value={question.options.toString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    options: event.target.value.split(",")
                })
            }
        />
    );
}

export function EditQuestionPub({
    question,
    setQuestion
}: QuestionEdit): JSX.Element {
    return (
        <Form.Check
            type="switch"
            id="published-check"
            label="Published/Unpublished"
            checked={question.published}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    published: event.target.checked
                })
            }
        />
    );
}

export function EditQuestionDelete({
    question,
    setQs,
    questions
}: {
    question: Question;
    setQs: (questions: Question[]) => void;
    questions: Question[];
}): JSX.Element {
    return (
        <button
            onClick={() =>
                setQs(
                    questions.filter(
                        (questionF: Question): boolean =>
                            questionF.id !== question.id
                    )
                )
            }
        >
            Delete Question
        </button>
    );
}

export function EditQuestions({
    questions,
    setQs
}: {
    questions: Question[];
    setQs: (questions: Question[]) => void;
}): JSX.Element {
    function setQuestion(id: number, newQuest: Question) {
        setQs(
            questions.map((question: Question) =>
                question.id === id ? newQuest : question
            )
        );
    }
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Question) => (
                <ListGroup.Item
                    as="li"
                    key={question.id}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <Container>
                            <Row>
                                <Col>
                                    <p>Question Name</p>
                                </Col>
                                <Col>
                                    <EditQuestionName
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionName>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Question Body</p>
                                </Col>
                                <Col>
                                    <EditQuestionBody
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionBody>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Expected Answer to Question</p>
                                </Col>
                                <Col>
                                    <EditQuestionExpected
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionExpected>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Question Type</p>
                                </Col>
                                <Col>
                                    {/*
                                    <EditQuestionType
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionType>
            */}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Question Options</p>
                                </Col>
                                <Col>
                                    <EditQuestionOptions
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionOptions>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Question Points</p>
                                </Col>
                                <Col>
                                    <EditQuestionPoints
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionPoints>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <EditQuestionPub
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionPub>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <EditQuestionDelete
                                        question={question}
                                        setQs={setQs}
                                        questions={questions}
                                    ></EditQuestionDelete>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
