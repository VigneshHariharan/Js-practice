// code 2^n combination

// iterative
const provideAllCombinationsInIterative = (array) => {
    let result = [[]];

   
    for(let num of array) {
        let newComb = []
        for(let comb of result) {
            newComb.push([...comb, num]);
        }
        result.push(...newComb);

    }    

    return {
        combinationArray: result,
        totalNumberOfCombinations: result.length
    }
}


// recursion
const provideAllCombinations = (array) => {
  if(array.length === 0) return [[]];

  console.log("provideAllCombinations", array);

  let combsWithoutFirstElem = provideAllCombinations(array.slice(1));
  console.log("combsWithoutFirstElem", array,combsWithoutFirstElem);

  let combsWithFirstElem = [];

  combsWithoutFirstElem.forEach((com) => {
    combsWithFirstElem.push([array[0],...com, ])
  })



  return [...combsWithoutFirstElem, ...combsWithFirstElem]

};




const inputs = [[6,7,8],[1,2,32],[3421,2],[32,13,1,5,2,6]];

for (let input of inputs) {
    const res = provideAllCombinations(input)
    if(res.length === 2 ** input.length) {
        console.log("pass-----------------", res, 2 ** input.length);
    } else {
        console.log("fail-----------------", res, 2 ** input.length);
    }

}