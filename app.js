let fAlert = alert("To continue you will be required to verify your ID")
let user = prompt("What is your name?")


if (user ="chris"){
   console.log("You are a verified user")
    alert("You are averified user"+" "+user)
}
else{
    alert("You are not verified ,subscribe for verification"+" "+user)
    console.log("You are not verified ,subscribe for verification")
}
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }
//Task to create an access authorisation that will check age and if below 18 yaers access shall be denied and when
//age is above 18 access shall be granted or upon confirmation by underage user

let age =prompt("What is your age")
function checkAge(age) {
if(age>18){
return true
}else{
    return confirm("Do you have permission from parents")
    
}
}
if(checkAge(age)){
    alert("ACCESS GRANTED")
}
else{
    alert("ACEES DENIED")
}

//functioin to return min of two nums
function minValue(fNum,sNum) {
    if (fNum<sNum) {
        return fNum
       
    }
    else if(fNum==sNum){
return "Equal"
    }
    else{
        return sNum
       
    }
   
}
alert(minValue(prompt("enter first number"),prompt("Enter second number")))
//arrow functons

//let sum = (a,b,c)=>a+b+c;
//alert(sum(1,2,3))
let multiply =(a,b)=>a*b
let sum =(a,b,c)=>{
    let sumall=a+b+c
    return sumall

}

console.log(sum(2,3,4))



