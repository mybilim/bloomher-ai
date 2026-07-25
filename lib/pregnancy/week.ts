

export function pregnancyWeek(
start:number
){

return Math.floor(
(Date.now()-start)
/
604800000
);

}


