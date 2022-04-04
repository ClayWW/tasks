import React, { useState } from "react";
import { Quiz } from "../../interfaces/quiz";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { EditQuestions } from "./EditQuestion";
import { AddQuestion } from "./AddQuestion";

export function EditQuiz({
    changeEditMode,
    quiz,
    editQuiz,
    deleteQuiz,
    setQuestions,
    questions
}: {
    changeEditMode: () => void;
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    setQuestions: (questions: Question[]) => void;
    questions: Question[];
}): JSX.Element {
    const [showThingy, setShowThingy] = useState<boolean>(false);
    const CloseAddModal = () => setShowThingy(false);
    const SShowAddModal = () => setShowThingy(true);
    const [name, setName] = useState<string>(quiz.name);
    const [description, setDescription] = useState<string>(quiz.description);
    function finalize() {
        editQuiz(quiz.id, {
            ...quiz,
            name: name,
            description: description,
            questions: questions
        });
        changeEditMode();
    }
    function goback() {
        changeEditMode();
    }
    function addQuestion(newQuest: Question) {
        const exists = questions.find(
            (question: Question): boolean => question.id === newQuest.id
        );
        if (exists === undefined) {
            setQuestions([...questions, newQuest]);
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuizDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <EditQuestions
                        questions={questions}
                        setQs={setQuestions}
                    ></EditQuestions>
                    <div>
                        <Button
                            variant="success"
                            className="me-4"
                            onClick={SShowAddModal}
                        >
                            Add a Question
                        </Button>
                        <AddQuestion
                            appears={showThingy}
                            close={CloseAddModal}
                            addQuestion={addQuestion}
                        ></AddQuestion>
                    </div>
                    <Button
                        onClick={finalize}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button onClick={goback} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuiz(quiz.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
