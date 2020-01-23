class LinkedListNode {
    constructor(param, that = null) {
        this.next = that;
        this.value = param;
    }
    toString(param) {
        if(param) {
            return param();
        }
        if(typeof this.value === "object") {
            return JSON.stringify(this.value);
        } else if(typeof this.value === "number") {
            return this.value.toString();
        } else {
            return this.value;
        }
    }
}

module.exports = LinkedListNode;
