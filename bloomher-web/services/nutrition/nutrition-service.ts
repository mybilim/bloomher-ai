export function addMeal(
meal:any
){

return {
...meal,
createdAt:
new Date()
};

}
