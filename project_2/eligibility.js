// let marks=Number(prompt("enter your marks"))
let maths=Number(prompt("enter your maths marks"))
let phy=Number(prompt("enter your phy marks"))
let chem=Number(prompt("enter your chem marks"))
let total=Number("your total is")
if(maths>=65){
    console.log(`your maths marks is${maths}`);
    
}
else if(phy>=55){
    console.log(`your phy marks is${phy}`);
    
}
else if(chem>=50){
    console.log(`your chem marks is ${chem}`);
    
}
else{
    console.log("you are file");
    
}

if(maths+phy+chem+total){
    console.log(total);
    
}
else{
    console.log("not eligible");
    
}


