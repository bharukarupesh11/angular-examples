var MyClass = /** @class */ (function () {
    function MyClass(first, second) {
        console.log('First:', first);
        console.log('Second:', second);
        if (!second) {
            this.value = first;
        }
        else {
            this.value = first + second;
        }
    }
    return MyClass;
}());
var obj1 = new MyClass("amit", "agrawal");
