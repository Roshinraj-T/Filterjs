// ===========================problem9================
// Write a function that takes an array of objects with a name and email property 
// and returns a new array with only the objects where the email address includes a 
// given domain. Use the filter method to accomplish this.
emails = [
    {name:'Ajith',  email:'aji@gmail.com'},  
    {name:'Karthik',email:'karthi@gmail.in'},    
    {name:'Gokul',  email:'goku@gmail.gov'},
    {name:'Rajeev', email:'raj@gmail.com'},
    {name:'Roshin', email:'rosh@gmail.ai'}    
    ]  

function existOrNot(str) {
    let checkingString = ".com";
    let checkingStringIndex = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === checkingString[checkingStringIndex]) {
        checkingStringIndex++;
        if (checkingStringIndex === checkingString.length) {
          return true;
        }
      } else {
        checkingStringIndex = 0;
      }
    }
    return false;
  }
  
    domain=emails.filter((e)=>existOrNot(e.email))
    console.log(domain);

