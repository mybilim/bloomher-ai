export function calculateBMI(
 height:number,
 weight:number
){
 if(!height || !weight) return 0;
 return Number(
  (weight/(height*height)).toFixed(2)
 );
}


export function calculateCycleDay(
 lastPeriod:string
){
 const start=new Date(lastPeriod);
 const today=new Date();

 const diff=Math.floor(
 (today.getTime()-start.getTime())
 /(1000*60*60*24)
 );

 return diff+1;
}
