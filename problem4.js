// =====================problem4========================
// Write a function that takes an array of objects with a category property and 
// returns a new array with only the unique categories. Use the filter and map 
// methods to accomplish this. 

// unique =[]
// obj=items.filter(
    
// )
// console.log(obj);
// library=[{id:1,role:'arjun',drama:'mahabharatham'},
// {id:1,role:'karnan',drama:'mahabharatham'},
// {id:1,role:'seetha',drama:'ramayanam'},
// {id:1,role:'jesus',drama:'bible'},
// {id:1,role:'lakshmana',drama:'ramayanam'}]



// book={}
// library.filter(e =>{
// if (e.drama in book) {
// book[e.drama].push(e)
//  } else {
//  book[e.drama]=[e]
// }
// })
// console.log(book)
// unique=[{name:'bike' ,category:'pulsor'},{name:'car',category:'honda',name:'cycle',category:'honda'}]

// function getData(val,key){
//  return (val.gender === key);    
//     }    
//     arr = [{'name':'Ponneelan','gender':'male'},
//     {'name':'Maruthu','gender':'male'},
//     {'name':'uma','gender':'female'},
//     {'name':'divya','gender':'female'},
//     {'name':'muthu','gender':'male'}
// ]
//     let data = arr.filter((val)=>getData(val,'male'));
//     console.log(data);



items=[
    {names:'brinjal',category:"veg"},
    {names:"potato",category:"veg"},
    {names:"apple",category:"fruit"},
    {names:"orange",category:"fruit"}
]
unique='veg'
character=items.filter((e)=>e.category===unique)
console.log(character)