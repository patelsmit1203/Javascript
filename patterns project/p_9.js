// 1
// 01
// 010
// 1010
// 10101

for (i = 1; i <= 5; i++) {
     temp = "";
    for (j = 0; j < i; j++) {
        
        temp += j % 2 === 0 ? '1' : '0';
    }
    console.log(temp);
}
