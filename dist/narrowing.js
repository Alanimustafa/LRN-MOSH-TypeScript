"use strict";
function kgTolb(weight) {
    if (typeof weight === 'number')
        return weight * 2.20462;
    else
        return parseInt(weight) * 2.20462;
}
console.log(kgTolb(100));
console.log(kgTolb("100"));
//# sourceMappingURL=narrowing.js.map