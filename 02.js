function evenOdd(str){
    /* Problem 2: Finding even or odd */
    if(typeof str !== 'string'){
        console.log('Please Input a Valid String');
    }
    else{
        let strLen = str.length;
        if(strLen % 2 == 1) return 'odd';
        else return 'even';
    }
}
console.log(evenOdd('12e'));