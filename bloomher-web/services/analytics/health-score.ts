export function calculateHealthScore(
data:any
){

let score=50;

if(data.sleep)
score+=10;

if(data.exercise)
score+=10;

if(data.mood)
score+=10;

return Math.min(
score,
100
);

}
