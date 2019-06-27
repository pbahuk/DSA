function collectOdds(nums) {
  const results = [];

  function oddCollector(nums) {
    if (!nums.length) {
      return;
    }
    if (nums[0] % 2) {
      results.push(nums[0]);
    }
    oddCollector(nums.slice(1));
  }
  oddCollector(nums);
  console.log('Inside :', results);
  return results;
}

const results = collectOdds([2, 3, 4, 5, 6, 7, 8, 9]);
console.log('Final :', results);

