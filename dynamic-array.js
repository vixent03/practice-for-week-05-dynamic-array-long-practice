class DynamicArray {

    constructor(defaultSize = 4) {

        this.capacity = defaultSize
        this.length = 0
        this.data = new Array(defaultSize)
    }

    read(index) {
        return this.data[index]
    }

    push(val) {

        // Your code here
    }


    pop() {

        // Your code here
    }

    shift() {

        // Your code here
    }

    unshift(val) {

        // Your code here
    }

    indexOf(val) {

        // Your code here
    }

    resize() {

        // Your code here
    }

}


module.exports = DynamicArray;