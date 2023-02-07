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
        console.log(totalDiamonds);
        if(totalDiamonds > 2000)
            return totalDiamonds - 2000;
        else return totalDiamonds;
    }
}
// console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, '50'));
// console.log(gemsToDiamond(100, 5, '1'));
