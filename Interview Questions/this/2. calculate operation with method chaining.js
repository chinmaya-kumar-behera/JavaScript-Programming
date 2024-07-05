
const calc = {
    value: 0,
    
    add: function(num) {
        this.value += num;
        return this;
    },
    
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    
    getResult: function() {
        return this.value;
    }
};

const res = calc.add(100).multiply(10).subtract(100).add(500).value;
console.log(res);

calc.value = 0;
const test1 = calc.add(10).subtract(5).multiply(3).add(2).value;
console.log(test1); 

calc.value = 0;
const test2 = calc.multiply(2).add(10).subtract(4).add(20).value;
console.log(test2);  