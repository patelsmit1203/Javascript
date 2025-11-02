// 1
// 00
// 111
// 0000
// 11111

for(i=1;i<=5;i++){
    temp=""
    for(j=0;j<i;j++){
        temp+=j%2===0
    }
    console.log(temp);
    
}