
// In this function we added type number to the end of the function to declare that the type of the return of this function is explicitly type number.

// noImplicitReturns compiler setting has bee activated in tsconfig.json.
// For better practice, always annotate the return type with function in typescript.
// There is another compitler setting in tsconfig.json that preent unused variables. This complier setting called noUnusedLocals.
function CalculateTax (income: number, taxYear: number) : number {
    
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;

}

console.log (CalculateTax(10000, 2023));