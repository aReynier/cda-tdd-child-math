export function multiplication(a: number, b: number): number {
    if(a === 0 && b === 0) {
        throw new Error('Au moins un des nombres doit être différent de 0');
    }

    return a * b;
}