import { smallNumberSubstraction } from '../modules/soustraction';
import { expect, describe, it } from 'vitest';

describe('smallNumberSubstraction', () => {
    describe('calculBasiqueSoustraction', () => {
        it('Should be calculated', () => {
            expect(smallNumberSubstraction(4, 2)).toBe(2);
        });

        it('Should not work if number is smaller than soustracteur', () => {
            expect(() => smallNumberSubstraction(2, 4)).toThrow("sorry you can't substract to get a negative result");
        });

        //calcul par lui même
        it('Should be zero if the number is substracted with itself', () => {
            expect(smallNumberSubstraction(4, 4)).toBe(0);
        });
    });

    describe('soustractionAvecZero', () => {
        it('Should number stay the same if the soustracteur is equal to zero', () => {
            expect(smallNumberSubstraction(4, 0)).toBe(4);
        });

        it('Should be zero if number and soustracteur is equal to zero', () => {
            expect(smallNumberSubstraction(0, 0)).toBe(0);
        });
    });
});