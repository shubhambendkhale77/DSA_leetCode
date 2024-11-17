var createCounter = function(n) {
return function() {
        return n++;
    }
}

const counter = createCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
