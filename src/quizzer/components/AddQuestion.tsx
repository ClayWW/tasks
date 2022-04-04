import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Question } from "../../interfaces/question";

export function AddQuestion({
    close,
    addQuestion,
    appears
}: {
    appears: boolean;
    close: () => void;
    addQuestion: (newOne: Question) => void;
}) {
    const [id, setId] = useState<number>(0);
    function finalize() {
        addQuestion({
            //creates a blank question
            id: id,
            name: "",
            body: "",
            points: 0,
            type: "multiple_choice_question",
            expected: "",
            options: [],
            published: false
        });
        close();
    }

    return (
        <Modal appears={appears} onHide={close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formQuestionId" as={Row}>
                    <Form.Label column sm={3}>
                        Question Id:
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
                    Finalize Question
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
