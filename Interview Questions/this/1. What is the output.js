
// Question was asked in OLX

"use strict";

function countLength() {
    return this.length
}

const arr = [countLength, 20, 30]

const res = arr[0]()
console.log(res)            // output : 3


