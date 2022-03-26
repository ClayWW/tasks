import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [gain, setGain] = useState<number>(0);
    const [valid, setValid] = useState<boolean>(true);

    function updateValid(): void {
        setAttempts(attempts - 1);
        if (attempts === 1) {
            setValid(false);
        } else {
            setValid(true);
        }
    }

    function updateGain(): void {
        setAttempts(attempts + gain);
        if (attempts + gain >= 1) {
            setValid(true);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="all-attempts">
                <Form.Label>Request Additional Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setGain(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button onClick={updateGain}>gain</Button>
            <Button onClick={updateValid} disabled={!valid}>
                use
            </Button>
            <div>{attempts}</div>
        </div>
    );
}
