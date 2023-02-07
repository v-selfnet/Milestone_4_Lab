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

// let arr = [1, 2, '5', 'j', -4, '9', -5, 3, 'u'];
// let arr = [1, 2, '5', 'j', -4];
// let arr = 4;
// let arr = [1, 2, 5, -4];
// let arr = [2, -5, -7, -13];
let arr = [-4, -9, -5, -33, -55];
console.log(findingBadData(arr));
