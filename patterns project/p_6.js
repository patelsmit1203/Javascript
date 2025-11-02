// 1
// 23
// 4  6
// 7   10
// 1112131415

num = 1;

for (i = 1; i <= 5; i++) {
    temp = "";
    for (j = 1; j <= i; j++) {
        
        if (i >= 3 && j > 1 && j < i) {
            temp += "  ";  
            num++;         
        } else {
            temp += num;
            num++;
        }
    }
    console.log(temp);
}
