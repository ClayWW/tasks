import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "magenta",
        "white"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="picking-a-color">
                {colors.map((option: string) => (
                    <Form.Check
                        inline
                        key={option}
                        value={option}
                        type="radio"
                        name={option}
                        onChange={updateColor}
                        id="color-checker"
                        label={option}
                        checked={option === color}
                        style={{ backgroundColor: option }}
                    />
                ))}
            </Form.Group>
            You Chose{" "}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}.
            </span>
        </div>
    );
}
