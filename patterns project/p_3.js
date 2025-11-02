// 5
// 54
// 543
// 5432
// 54321

for(i = 1; i <= 5; i++) {
    temp = ""
    for(j = 5; j >= 6 - i; j--) {
        temp += j
    }
    console.log(temp)
}
