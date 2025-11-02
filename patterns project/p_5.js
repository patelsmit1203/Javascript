// 1
// 23
// 456
// 78910
// 1112131415

num=1
for(i=1;i<=5;i++){
    temp=""
    for(j=1;j<=i;j++){
        temp+=num
        num++
    }
    console.log(temp);
    
}