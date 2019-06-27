function collectOdds(nums, arr) {
    if (!nums.length || nums[0] === 0) {
        return;
    }
    console.log('********************', arr, nums);
    nums.push(0);

    if(nums[0] % 2) {
        arr.push(nums[0]);
    }
    return collectOdds(nums.slice(1), arr);
}


let arr = [];
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
collectOdds(nums, arr);
console.log(arr, nums);