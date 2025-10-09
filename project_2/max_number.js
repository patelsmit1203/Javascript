let no1=Number(prompt("enter first number"))
let no2=Number(prompt("enter second number"))
let no3=Number(prompt("enter 3rd number"))

if(no1 > no2 && no1 > no3 ){
   console.log("number 1 is big number");
   
}
else if(no2 > no1 && no2 > no3){
    console.log("number 2 is big number");
    
}
else if(no3 > no1 && no3 > no2){
    console.log("number 3 is big number");
    
}

else{
    console.log("all number are same");
    
}