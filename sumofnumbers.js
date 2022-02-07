const test = [1, 2, 3];
function sumforloop(nums){
  let total = 0;
  for(let num of nums){
    total += num;
  }
  return total;
}

console.log(sumforLoop(test));

function sumwhileloop(nums){
  let total = 0;
  let i = 0;
  while(i < nums.length){
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumwhileloop(test));

function recursiveSum(nums){
    if(nums.length == 0){
      return 0;
    }
    return nums[0] + recursiveSum(nums.slide(1, nums.length));
}

console.log(recursiveSum(test));

function simpleSum(nums){
    return _.reduce(nums, function(memo, num){return memo + num});
}

