// 1
// **
// 123
// ****
// 12345

for (let i = 1; i <= 5; i++) {
    let temp = "";
    if (i % 2 === 0) {
        
        for (let j = 1; j <= i; j++) {
            temp += "*";
        }
    } else {
    
        for (let j = 1; j <= i; j++) {
            temp += j;
        }
    }
    console.log(temp);
}
