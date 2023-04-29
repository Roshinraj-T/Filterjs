// ======================problem8====================
// Write a function that takes an array of objects with a date property and returns a 
// new array with only the objects where the date is within a given range. Use the 
// filter method to accomplish this.
namesWithDate=[
    {names:"roshin",age:21,date:'2001-9-2'},
    {names:"gokul",age:22, date:('2000-6-3')},
    {names:"selva",age:21,date:('2001-11-20')},
    {names:"jagan",age:22,date:('2000-9-12')},
    {names:"singaram",age:22,date:('2000-5-3')},
    {names:"vishnu",age:24,date:('1998-9-12')}]
range=namesWithDate.filter((e)=>
     (e.date >'2000-1-1') && (e.date<'2001-1-1') 
)
console.log(range);