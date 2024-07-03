import { additionPetitsNombres } from '../modules/addition';
import { expect, describe, it } from 'vitest';

describe('additionPetitsNombres', () => {
    describe('additionAvecZéro', () => {
        it('When a is equal 0', () => {
            expect(additionPetitsNombres(0, 1)).toBe(1);
        });

        it('When b is equal 0', () => {
            expect(additionPetitsNombres(1, 0)).toBe(1);
        });

        it('When both are equal 0', () => {
            expect(additionPetitsNombres(0, 0)).toBe(0);
        });
    });

    describe('additionPetitsNombres', () => {
        it('should return 2 when 1 + 1', () => {
            expect(additionPetitsNombres(1, 1)).toBe(2);
        });

        it('should return 3 when 2 + 1', () => {
            expect(additionPetitsNombres(2, 1)).toBe(3);
        });

        it('should return 3 when 1 + 2', () => {
            expect(additionPetitsNombres(1, 2)).toBe(3);
        });
    });

    describe('additionNombresNégatifs', () => {
        it('should throw an error when a is negative', () => {
            expect(() => additionPetitsNombres(-1, 1)).toThrow('Les nombres doivent être positifs');
        });

        it('should throw an error when b is negative', () => {
            expect(() => additionPetitsNombres(1, -1)).toThrow('Les nombres doivent être positifs');
        });
    });

    describe('additionGrandNombres', () => {
        it('should throw an error when a is greater than 9', () => {
            expect(() => additionPetitsNombres(10, 1)).toThrow('Les nombres doivent être inférieurs à 10');
        });
    
        it('should throw an error when b is greater than 9', () => {
            expect(() => additionPetitsNombres(1, 10)).toThrow('Les nombres doivent être inférieurs à 10');
        });
    });
});