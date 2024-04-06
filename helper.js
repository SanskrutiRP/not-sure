"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEaseScore = exports.EASESCORE = exports.evaluate = void 0;
const evaluate = (condition, input) => {
    if (input === condition.value && condition.operator === 'equal') {
        return true;
    }
    else if (input < condition.value && condition.operator === 'lessThan') {
        return true;
    }
    else if (input > condition.value && condition.operator === 'greaterThan') {
        return true;
    }
    else if (input <= condition.value &&
        condition.operator === 'lessThanInclusive') {
        return true;
    }
    else if (input >= condition.value &&
        condition.operator === 'greaterThanInclusive') {
        return true;
    }
    else if (input !== condition.value && condition.operator === 'notEqual') {
        return true;
    }
    else {
        return false;
    }
};
exports.evaluate = evaluate;
exports.EASESCORE = [
    {
        low: [100, 300]
    },
    {
        medium: [301, 700]
    },
    {
        high: [701, 1000]
    },
];
function getEaseScore(input) {
    for (const es of exports.EASESCORE) {
        const [min, max] = Object.values(es)[0];
        if (input >= min && input <= max) {
            return Object.keys(es)[0];
        }
    }
    return "none";
}
exports.getEaseScore = getEaseScore;
