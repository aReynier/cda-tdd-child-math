import { puissance } from '../modules/puissance';
import { expect, describe, it } from 'vitest';

describe('puissance', () => {
    describe('calculBasiquePuissance', () => {
        it('Should be calculated', () => {
            expect(puissance(2, 4)).toBe(16);
        });
    });

    describe('calculPuissanceNegatif', () => {
        it('Should number be positif when exposant is even', () => {
            expect(puissance(-2, 4)).toBe(16);
        });

        it('Should number be negative when exposant is odd', () => {
            expect(puissance(-2, 5)).toBe(-32);
        });

        it('Should exposant be negative', () => {
            expect(() => puissance(2, -4)).toThrow('L\'exposant ne peut être négatif');
        });
    });

    describe('calculPuissanceZero', () => {
        it('Should be 0 when number is equal zero', () => {
            expect(puissance(0, 4)).toBe(0);
        });

        it('Should be 0 when exposant is equal zero', () => {
            expect(puissance(2, 0)).toBe(1);
        });

        it('Should be 0 when all is equal zero', () => {
            expect(puissance(2, 0)).toBe(1);
        });
    });

    describe('calculExposantUn', () => {
        it('Should number be the same when the esposant is equal to one', () => {
            expect(puissance(2, 1)).toBe(2);
        });

        it('Should be number always be 1 when number equal to one', () => {
            expect(puissance(1, 2)).toBe(1);
        });
    });
});
