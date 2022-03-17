import React, { useState } from "react";
import { Button } from "react-bootstrap";

const COLORS = ["red", "blue", "green"]; //

interface CBProps {
    colorIndex: number;
    setColorIndex: (colorIndex: number) => void;
}

function ChangeColor({ colorIndex, setColorIndex }: CBProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % 3)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: CBProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
