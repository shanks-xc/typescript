var Cats = /** @class */ (function () {
    function Cats(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name + " is " + this.age + " years old");
    }
    return Cats;
}());
var Animals = new Cats('luck', '1');
console.log(Animals);
