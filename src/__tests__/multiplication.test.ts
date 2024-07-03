import { multiplication } from '../modules/multiplication';
import { expect, describe, it } from 'vitest';

describe('multiplication', () => {
    describe('multiplicationWithOne', () => {
        it('Should multiply with a equal 1', () => {
            expect(multiplication(1, 5)).toBe(5);
        });

        it('Should multiply with b equal 1', () => {
            expect(multiplication(5, 1)).toBe(5);
        });

        it('1 * 1 Should be 1', () => {
            expect(multiplication(1, 1)).toBe(1);
        });
    });

    describe('multiplicationWithSmallNumber', () => {
        it('Should multiply small numbers', () => {
            expect(multiplication(3, 3)).toBe(9);
        });
    });

    describe('multiplicationWithBigNumber', () => {
        it('Should multiply big number', () => {
            expect(multiplication(999, 999)).toBe(998001);
        });
    });

    describe('multiplicationWithZero', () => {
        it('Should return 0 when a equal 0', () => {
            expect(multiplication(0, 1)).toBe(0);
        });

        it('Should return 0 when b equal 0', () => {
            expect(multiplication(1, 0)).toBe(0);
        });

        it('Should throw error when both equal 0', () => {
            expect(() => multiplication(0, 0)).toThrow('Au moins un des nombres doit être différent de 0');
        });
    });

    describe('multiplicationWithNegativeNumber', () => {
        it('Should be negative when a is negative', () => {
            expect(multiplication(-3, 3)).toBe(-9);
        });

        it('Should be negative when b is negative', () => {
            expect(multiplication(3, -3)).toBe(-9);
        });

        it('Should be positive when both are are negative', () => {
            expect(multiplication(-3, -3)).toBe(9);
        });
    });
});