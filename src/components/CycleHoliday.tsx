/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidayYear: Record<string, string> = {
        "Valentines Day": "Earth Day",
        "Earth Day": "Independence Day",
        "Independence Day": "Halloween",
        "Halloween": "Christmas",
        "Christmas" : "Valentines Day"
    };
    const holidayAlphabet: Record<string, string> = {
        "Christmas": "Earth Day",
        "Earth Day": "Halloween",
        "Halloween" : "Independence Day",
        "Independence Day": "Valentines Day",
        "Valentines Day": "Christmas"
    };
    const [holiday, setHoliday] = useState<string>("Christmas");
    function changeHolidayAlphabetically(): void {
        const newHoliday = holidayAlphabet[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayYear(): void {
        const newHoliday = holidayYear[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Holiday: {holiday === "Christmas"
                    ? "🎄"
                    : holiday === "Earth Day"
                    ? "🌎"
                    : holiday === "Halloween"
                    ? "🎃"
                    : holiday === "Independence Day"
                    ? "🇺🇸"
                    : "💖"}
            <div>
            <Button onClick={changeHolidayAlphabetically}>
                Change By Alphabet
            </Button>
            <Button onClick={changeHolidayYear}>Change By Year</Button>
            </div>
        </div>
    );
}
