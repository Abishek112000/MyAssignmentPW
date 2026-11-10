function intersection(arr1, arr2) {
    const result = []
    for (let i =0; i< arr1.length; i++) {
        for (let j =0; j < arr2.length; j ++){
            if (arr1[i]===arr2[j] && !result.includes(arr1[i])){
                result.push(arr1[i])
            }
        }
    }
    return result
}
console.log(intersection([1,4,6,7], [4,1,2,3]));

function intersection (arr3, arr4) {
    let one = arr3.filter(item => arr4.includes(item));
    return one;
}
console.log(intersection ([1,3,4,6]), ([2,5,6,8]));
