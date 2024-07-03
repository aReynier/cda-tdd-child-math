export function additionPetitsNombres(a: number, b: number): number {
    if(a < 0 || b < 0) {
        throw new Error('Les nombres doivent être positifs');
    }
    if(a > 9 || b > 9) {
        throw new Error('Les nombres doivent être inférieurs à 10');
    }

    return a + b;
}