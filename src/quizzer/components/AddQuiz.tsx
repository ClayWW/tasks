import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Quiz } from "../../interfaces/quiz";

export function AddQuiz({
    close,
    addQuiz,
    appears
}: {
    appears: boolean;
    close: () => void;
    addQuiz: (newOne: Quiz) => void;
}) {
    const [id, setId] = useState<number>(0);
    function finalize() {
        addQuiz({
            id: id,
            name: "",
            description: "",
            points: 0,
            questions: [],
            started: false
        });
        close();
    }

    return (
        <Modal appears={appears} onHide={close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formQuizId" as={Row}>
                    <Form.Label column sm={3}>
                        Quiz Id:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={finalize}>
                    Finalize Quiz
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
