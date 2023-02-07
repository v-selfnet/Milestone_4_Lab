function mindGame(number){
    /* Problem 1: Let’s play a mind game */
    if(typeof number !== 'number'){
        console.log('Please Input a Valid Number');
    }
    else{
        let multi = number * 3; 
        let add = multi + 10; 
        let div = add / 2;  
        let sub = div - 5; 
        return sub;
    }
}
console.log(mindGame(5))


