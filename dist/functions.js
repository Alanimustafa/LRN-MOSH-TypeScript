"use strict";
function CalculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(CalculateTax(10000, 2023));
//# sourceMappingURL=functions.js.map