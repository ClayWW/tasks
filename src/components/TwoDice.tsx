/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, setLeftDie] = useState<number>(0);
    const [rightdie, setRightDie] = useState<number>(7);
    function RollRight(): void {
        setRightDie(d6());
    }

    function RollLeft(): void {
        setLeftDie(d6());
    }
    return (
        <div>
            <div>
                Result:{" "}
                <span>
                    {leftdie === rightdie && rightdie === 1
                        ? "Lose"
                        : leftdie === rightdie
                        ? "Win"
                        : null}
                </span>
            </div>
            <div>
                Left Die: <span data-testid="left-die">{leftdie}</span>
            </div>
            <div>
                Right Die: <span data-testid="right-die">{rightdie}</span>
            </div>
            <Button onClick={RollLeft}>Roll Left</Button>
            <Button onClick={RollRight}>Roll Right</Button>
        </div>
    );
}
