import * as rule from  './rule.json';
import { evaluate, getEaseScore } from './helper';

function calculateUserEaseScore()  {
    const userDetails: any =  {
        totalOrderValue: 5000,
        maximumOrderValue: 600,
        activeDuration: 12
    }

    const conditions = rule?.conditions;

    const result = {
        attribute: '',
        result: true,
    };
    
    conditions.some((condition: { fact: string; value?: any; operator?: any; }) => {
        const conditionResult = evaluate(condition, userDetails[condition?.fact]);
        if (!conditionResult) {
            result.attribute = condition?.fact;
            result.result = false;
            return true; 
        }
        return false;
    });
    

    if(result.result) {
        const easeScore = 100;
        console.log(getEaseScore(easeScore));
        return;
    }

    console.log(`no rule passed:: default easescore is low`);
}


calculateUserEaseScore();