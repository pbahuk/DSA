function validAnagrams(str1, str2) {
    const map = new Map();
    if (str1.length !== str2.length) {
        return false;
    }

    for(let i=0; i<str1.length; i++) {
        const val = map.get(str1[i]) ? map.get(str1[i]) + 1 : 1;
        map.set(str1[i], val);
    }

    for(let i=0; i<str2.length; i++) {
        if (!map.get(str2[i])) {
            return false;
        }
        map.set(str2[i], map.get(str2[i]) - 1);
    }

    const keys = map.keys();
    console.log(keys);
    for (let i=0; i< keys.length; i++) {
        if (map.get(keys[i])) {
            return false;
        }
    }
    return true;
}

validAnagrams('aasz', 'zaa');