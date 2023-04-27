// =======================problem6====================
// Write a function that takes an array of objects with a name and hobbies property 
// and returns a new array with only the objects where the hobbies include a given 
// hobby. Use the filter method to accomplish this. 
names=[{name:'roshin',hobbies:'playing'},{name:'selva',hobbies:'game'},{namae:'singaram',hobbies:'walking'},{name:'ajith',hobbies:'playing'},{name:'gokul',hobbies:'game'},{namae:'rajiv',hobbies:'walking'}]
hobbies=names.filter((e)=>e.hobbies==='playing')
console.log(hobbies);