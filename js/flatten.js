let array = [1, [2, true, [3, null, [4, [5]]]]];

const flatten = (arr) => {
    let result = [];

    for (const val of arr) {
        if (Array.isArray(val)) {
            let v = flatten(val);
            for (let vv of v) {
                result.push(vv);
            }
        } else {
            result.push(val);
        }
    }

    return result;
};

console.log(flatten(array));
