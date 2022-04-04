import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
    changePoints,
    totalPoints
}: {
    options: string[];
    expectedAnswer: string;
    changePoints: (addTo: number) => void;
    totalPoints: number;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
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
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="select-choice">
                <Form.Label>Select Choice</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{result}</div>
        </div>
    );
}
