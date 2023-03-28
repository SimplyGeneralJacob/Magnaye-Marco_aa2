//* 1 2 3 4 5 6 7 8 9
//* 1 3 6 11 20 37, 70*//
//* 2+n + 2^n - 2 */


for(let i=0; i<=12; i++){
    let a = ((2 + i) + (2**i) - 2);
    if(a<4000){
        document.writeln(a + ",<br>")
    }else{
        document.writeln(a + "<br>")
    }
}
