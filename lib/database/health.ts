

export interface HealthData{

uid:string;

weight:number;

height:number;

mood:string;

}


export function saveHealth(
data:HealthData
){

return data;

}


