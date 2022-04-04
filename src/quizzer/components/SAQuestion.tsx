import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ShortAnswerQuestion({
    expectedAnswer,
    changePoints,
    totalPoints
}: {
    expectedAnswer: string;
    changePoints: (addTo: number) => void;
    totalPoints: number;
}): JSX.Element {
    const [choice, setChoice] = useState<string>("");
    const [result, setResult] = useState<string>("❌");
    const [previous, setPrevious] = useState<boolean>(false);

    function updateChoice(
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        setChoice(event.target.value);
        if (event.target.value === expectedAnswer) {
            setResult("✔️");
            setPrevious(true);
            changePoints(totalPoints);
        } else {
            setResult("❌");
            if (previous) {
                changePoints(-totalPoints);
                setPrevious(false);
            }
        }
    }
    return (
        <div>
            <h3>Short Answer Question</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={choice}
                    onChange={updateChoice}
                    placeholder="Enter Answer..."
                ></Form.Control>
            </Form.Group>
            <div>{result}</div>
        </div>
    );
}
