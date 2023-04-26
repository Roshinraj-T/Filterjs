// =========================problem2==================
// Write a function that takes an array of objects with a price property and returns a 
// new array with only the objects that have a price less than a given amount. Use 
// the filter method to accomplish this. 
items=[
    {names:"bat",price:100},
    {names:"ball",price:50},
    {names:"mat",price:200},
    {names:"helmet",price:500}
]
price=items.filter((e)=>e.price<200)
console.log(price);