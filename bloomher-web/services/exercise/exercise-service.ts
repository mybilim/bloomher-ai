export function addWorkout(
workout:any
){

return {
...workout,
createdAt:
new Date()
};

}
