function same(arr1, arr2) {
    const map = {};
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i =0; i< arr1.length; i++) {
        let val = arr1[i] * arr1[i];
        map[val] = map[val] ? map[val] + 1 : 1;
    }

    for (let i = 0; i< arr2.length; i++) {
        const val2 = arr2[i];
        if (!map[val2]) {
            return false;
        } else {
            map[val2]--;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));