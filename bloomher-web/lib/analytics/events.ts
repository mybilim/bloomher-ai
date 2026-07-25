export function trackEvent(
name:string,
data:any
){

return {

name,
data,
time:
new Date()

};

}
