const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};

// Test
const log = (msg) => console.log("실행: ", msg, Date.now());
const d = debounce(log, 500);
d("a");
d("b");
d("c");
