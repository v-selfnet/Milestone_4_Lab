function isLGSeven(num){
    /* Problem 3: Is Less or Greater than seven */
    if(typeof num !== 'number'){
        console.log('Please Input a Valid Number');
    }
    else{
        if(num < 7) return num - 7; 
        else return num * 2;
    }
}
console.log(isLGSeven('6'));