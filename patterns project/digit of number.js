// input:768
// output:21

let number=Number(prompt("enter numbers"))
let sum=0

while (number>0) {
    sum+=number%10
    number=parseInt(number/10)
}
console.log(`your sum of digit number is ${sum}`);
