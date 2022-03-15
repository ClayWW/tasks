import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mully(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>
                Quiz in Progress:{" "}
                <span>{progress === true ? "True" : "False"}</span>
            </div>
            <div>
                Number of Attempts Remaining: <span>{attempts}</span>
            </div>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mully} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
