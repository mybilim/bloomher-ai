
export function calculateHealthScore(
sleep:number,
water:number,
exercise:number
){

return Math.min(
100,
sleep + water + exercise
);

}

