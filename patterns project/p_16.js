//     *
//    ***
//   *****
//  *******  
// *********  

let n = 5;

for ( i = 1; i <= n; i++) {
     temp = "";

    
    for (j = 1; j <= n - i; j++) {
        temp += " ";
    }

    
    for ( k = 1; k <= (2 * i - 1); k++) {
        temp += "*";
    }

    console.log(temp);
}
