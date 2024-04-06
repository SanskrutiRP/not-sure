export const evaluate = (condition: { fact: string, value?: any; operator?: any; }, input: number): boolean => {
    if (input === condition.value && condition.operator === 'equal') {
      return true;
    } else if (input < condition.value && condition.operator === 'lessThan') {
      return true;
    } else if (input > condition.value && condition.operator === 'greaterThan') {
      return true;
    } else if (
      input <= condition.value &&
      condition.operator === 'lessThanInclusive'
    ) {
      return true;
    } else if (
      input >= condition.value &&
      condition.operator === 'greaterThanInclusive'
    ) {
      return true;
    } else if (input !== condition.value && condition.operator === 'notEqual') {
      return true;
    } else {
      return false;
    }
};

export const EASESCORE = [
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

export function getEaseScore(input: number): string {
    for (const es of EASESCORE) {
        const [min, max] = Object.values(es)[0];
        if (input >= min && input <= max) {
            return Object.keys(es)[0];
        }
    }
    return "none";
}