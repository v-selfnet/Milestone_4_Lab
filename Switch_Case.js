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


function isLGSeven(num){
    /* Problem 3: Is Less or Greater than seven */
    if(typeof num !== 'number'){
        return 'Please Input a Valid Number';
    }
    else{
        if(num < 7) return num - 7; 
        else return num * 2;
    }
}

function findingBadData(array) {
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
        typeof thirdGems !== 'number'){
        return 'Please Input a Valid Number';
    }
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


function switchCase(choice) {
    console.log('---------- Navigation Start----------');
    console.log('0: Exit');
    console.log('1: Let’s play a mind game');
    console.log('2: Finding even or odd');
    console.log('3: Is Less or Greater than seven');
    console.log('4: Finding Bad data');
    console.log('5: Finding Bad data');
    console.log('---------- Navigation End ----------\n');
    while (choice !== 0) {
        switch (choice) {
            case 1:
                console.log(mindGame(5));
                break;
            case 2:
                console.log(evenOdd('12e'));
                break;
            case 3:
                console.log(isLGSeven('6'));
                break;
            case 4:
                let arr = [-4, -9, '-5', -33, -55];
                console.log(findingBadData(arr));
                break;
            case 5:
                console.log(gemsToDiamond(1, 1, 1));
                // console.log(gemsToDiamond(20, 200, '50'));
                // console.log(gemsToDiamond(100, 5, '1'));
                break;
            default:
                console.log('Null');
                break;
        }
        return 0;
    }
    console.log('Exit');
}
switchCase(5);