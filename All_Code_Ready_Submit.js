function mindGame(number){
    /* Problem 1: Let’s play a mind game */
    if(typeof number !== 'number')
        return 'Please Input a Valid Number';
    else{
        let multi = number * 3; 
        let add = multi + 10; 
        let div = add / 2;  
        let sub = div - 5; 
        return sub;
    }
}


function evenOdd(str){
    /* Problem 2: Finding even or odd */
    if(typeof str !== 'string')
        return 'Please Input a Valid String'
    
    else{
        let strLen = str.length;
        if(strLen % 2 == 1) return 'odd';
        else return 'even';
    }
}


function isLGSeven(num){
    /* Problem 3: Is Less or Greater than seven */
    if(typeof num !== 'number')
        return 'Please Input a Valid Number';
    else{
        if(num < 7) return num - 7; 
        else return num * 2;
    }
}


function findingBadData(array){
    /* Problem 4: Finding Bad data */
    let checkArray = Array.isArray(array);
    let maliciousData = [];
    let maliciousAddress = [];
    let maliciousType = '';
    let badNumber = [];
    if(!checkArray) return 'Opps, This is not an array !!!';
    else{
        for(let i=0; i<array.length; i++){
            if(typeof array[i] !== 'number'){
                maliciousData.push(array[i]);
                maliciousAddress.push(array.indexOf(array[i]));
                maliciousType = typeof array[i];
            }
            else if(array[i] < 0) badNumber.push(array[i]);
        }
        if(maliciousData.length !== 0){
            console.log('Error: Program Stop Execution !!!\nFind Malicious Data below:');
            return `Data: [${maliciousData}]\nAddr: [${maliciousAddress}]\nType: [${maliciousType}]`;
        }
        else return badNumber.length;
    }
}


function gemsToDiamond(firstGems, secondGems, thirdGems){
    /* Problem 5: Convert your gems into diamond */
    if(typeof firstGems !== 'number' || 
        typeof secondGems !== 'number' || 
        typeof thirdGems !== 'number')
        return 'Please Input a Valid Argument';
    else{
        let firstDiamond = firstGems * 21;
        let secondDiamond = secondGems * 32;
        let thirdDiamond = thirdGems * 43;
        let totalDiamonds = firstDiamond + secondDiamond + thirdDiamond;
        if(totalDiamonds > 2000)
            return totalDiamonds - 2000;
        else return totalDiamonds;
    }
}