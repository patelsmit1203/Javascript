//     *   
//    **  
//   *** 
//  **** 
// *****
//  ****
//   ***
//    **
//     *

let n = 5;

for ( i = 1; i <= n; i++) {
     temp = ""

    
    for (j = 0; j <= n - i; j++) {
        temp += " "
    }

    
    for ( k = 1; k <=i; k++) {
        temp += "*"
    }

    console.log(temp)
}

for(i=n-1;i>=1;i--){
    temp=""

   for(j=1;j<=n-i;j++){
    temp+=" "
   }

   for(k=1;k<=i;k++){
    temp+="*"
   }
   console.log(temp);
   
}