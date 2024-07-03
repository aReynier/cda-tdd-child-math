export function puissance(a: number, b: number): number {
    if( a === 1 ) {
        return 1;
    }
    if( b === 0 ) {
        return 1;
    }
    if( b === 1 ) {
        return a;
    }
    if( Math.sign(b) === -1 ) {
        throw new Error('L\'exposant ne peut être négatif');
    }
    
    return a ** b;
}