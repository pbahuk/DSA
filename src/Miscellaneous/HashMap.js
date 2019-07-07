(function() {
  class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }

    hash(key) {
      let total = 0;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        total += key.charCodeAt(i) - 96;
      }
      return total % this.keyMap.length;
    }

    set(key, value) {
      const index = this.hash(key);
      const values = this.keyMap[index];

      if (!values) {
        this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
      } else {
        let foundIndex = -1;
        for (let i = 0; i < values.length; i++) {
          if (values[i][0] === key) {
            foundIndex = i;
            break;
          }
        }

        if (foundIndex > -1) {
          values[foundIndex][1] = value;
        } else {
          values.push([key, value]);
        }
      }
      console.log(this.keyMap);
    }

    get(key) {
      const index = this.hash(key);
      const values = this.keyMap[index];

      if (values) {
        const found = values.find(couple => couple[0] === key);
        if (found) {
          return found[1];
        }
      }
      return undefined;
    }

    keys() {
      const keys = [];
      this.keyMap.forEach((values, index) => {
        if (values) {
          values.forEach(value => {
            keys.push(value[0]);
          });
        }
      });
      return keys;
    }

    values() {
      const values = [];
      const map = {};
      this.keyMap.forEach((presentValues, index) => {
        if (presentValues) {
          presentValues.forEach(value => {
            if (!map[value[1]]) {
              map[value[1]] = 1;
              values.push(value[1]);
            } else {
              map[value[1]]++;
            }
          });
        }
      });
      return values;
    }
  }

  const hashTable = new HashTable();
  hashTable.set("pink", 1);
  hashTable.set("pink", 2);
  hashTable.set("yellow", 2);
  hashTable.set("yellow", 2);
  hashTable.set("red", 2);
  hashTable.set("mustard", 2);
  console.log(hashTable.get("pink"));
})();

// [ , , , , , , , , ,]
//  /
// []
