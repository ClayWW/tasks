import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [response, setResponse] = useState<string>("");
    const [result, setResult] = useState<string>("❌");

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
        checkAnswer(event.target.value);
    }

    function checkAnswer(answer: string) {
        if (answer === expectedAnswer) {
            setResult("✔️");
        } else {
            setResult("❌");
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="response">
                <Form.Label>Type Answer:</Form.Label>
                <Form.Control value={response} onChange={updateResponse} />
            </Form.Group>
            <div>{result}</div>
        </div>
    );
}
