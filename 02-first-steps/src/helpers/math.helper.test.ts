import {describe, expect, test} from 'vitest';
import { add, multiply, subtract } from './math.helper';


describe('add', () => {
    test('should add two positives numbers', () => {

        //! 1. arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a,b);
        console.log({result})

        // ! 3. Assert
        expect(result).toBe(a + b);
});

describe('substract', () => {
    test('should substract two negatives numbers', () => {

        //! 1. arrange
        const a = -1;
        const b = -2;

        // ! 2. Act
        const result = subtract(a,b);
        console.log({result})

        // ! 3. Assert
        expect(result).toBe(a - b);
});
test('should substract two positive numbers', () => {

        //! 1. arrange
        const a = 5;
        const b = 4;

        // ! 2. Act
        const result = subtract(a,b);
        console.log({result})

        // ! 3. Assert
        expect(result).toBe(a - b);
});
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {

        //! 1. arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = multiply(a,b);

        // ! 3. Assert
        expect(result).toBe(a * b);
});
test('should multiply with 0', () => {

        //! 1. arrange
        const a = 1;
        const b = 0;

        // ! 2. Act
        const result = multiply(a,b);
        console.log({result})

        // ! 3. Assert
        expect(result).toBe(a * b);
});
});




});