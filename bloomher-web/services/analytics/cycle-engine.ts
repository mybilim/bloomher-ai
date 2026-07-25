export function predictNextCycle(
lastPeriod:string,
cycle:number
){

const date =
new Date(lastPeriod);

date.setDate(
date.getDate()+cycle
);

return date.toISOString();

}


export function fertileWindow(
period:string
){

return {
start:period,
end:period
};

}
