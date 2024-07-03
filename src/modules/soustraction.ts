export function smallNumberSubstraction(a :number, b :number) {
    if (b === 0) {
        return a;
    }

    if (a === b) {
        return 0;
    }

    if (a === 0 && b === 0) {
        return 0;
    }
    
    if (a < b) {
      throw new Error("sorry you can't substract to get a negative result");
    }
  
    const result = a - b;
  
    if (result > 9) {
      throw new Error("you are cheating trying to substract big numbers here");
    }
  
    return result;
  }