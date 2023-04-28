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




// unique='veg'
// uniquecategory=items.filter((e)=>e.category==='veg')
// console.log(uniquecategory); 
// mappeditems=[]


// console.log(obj.veg)
// mappeditems.push(obj)
// console.log(mappeditems);
// unique=mappeditems.filter((e)=>Object.keys(e)==='veg')
// console.log(unique);
// console.log(Object.keys(items));
// character=mappeditems.find((e)=>mappeditems.includes(e))
// console.log(character.fruit)



items=[
    {names:'brinjal',category:"veg"},
    {names:"potato",category:"veg"},
    {names:"apple",category:"fruit"},
    {names:"orange",category:"fruit"}
]
category=items.map((e)=>e.category)

unique = category.filter((e)=>unique(e))
seperate=[]
console.log(unique);
function unique(str){    
    if(!(seperate.includes(str))){
        seperate.push(str)
        return true
    }
    else{
        return false
    }
    
}