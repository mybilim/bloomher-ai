export function calculateNextPeriod(
lastDate:string,
cycle:number
){

const date =
new Date(lastDate);

date.setDate(
date.getDate()+cycle
);

return date.toISOString();

}
