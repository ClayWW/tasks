import { getValue } from "@testing-library/user-event/dist/utils";
import { resourceLimits } from "worker_threads";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const start = numbers[0];
    const end = numbers[numbers.length - 1];
    const dog: number[] = [];
    if (start !== null && end !== null) {
        const dog = [start, end];
        return dog;
    } else if (start === null) {
        const dog: number[] = [];
        return dog;
    } else if (start !== null && end === null) {
        const dog: number[] = [start, start];
        return dog;
    } else {
        return dog;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const x = numbers.map((value: string): number => parseInt(value));
    const y = x.map((value: number): number =>
        isNaN(value) ? (value = 0) : value
    );
    return y;
}
/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const x = amounts.map((value: string): string =>
        value[0] === "$" ? value.slice(1, value.length) : value
    );
    const y = x.map((value: string): string =>
        value === "" || isNaN(parseInt(value)) ? (value = "0") : value
    );
    const z = y.map((value: string): number => parseInt(value));
    return z;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const x = messages.map((value: string): string =>
        value[value.length - 1] === "!" ? value.toUpperCase() : value
    );
    const y = x.filter(
        (value: string): boolean => value[value.length - 1] !== "?"
    );
    return y;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const check = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return check;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    let returnstr = "";
    returnstr = sum + "=";
    for (const num of addends) {
        if (num === addends[addends.length - 1]) {
            returnstr = returnstr + num;
        } else {
            returnstr = returnstr + num + "+";
        }
    }
    return returnstr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        return [0];
    }
    const neg = values.findIndex((value: number): boolean => value < 0);
    if (neg === -1) {
        const total = values.reduce(
            (total: number, num: number) => (total += num),
            0
        );
        const final = [...values];
        final.push(total);
        return final;
    }
    const total = values.reduce(
        (total: number, num: number) =>
            values.indexOf(num) < neg ? (total += num) : (total += 0),
        0
    );
    const final = [...values];
    final.splice(neg + 1, 0, total);
    return final;
}
