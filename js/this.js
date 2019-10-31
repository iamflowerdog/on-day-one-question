
var number = 10;
function fn() {
    console.log(this.number);
}
var obj = {
    number: 2,
    show: function (fn) {
        this.number = 3;
        fn();
        arguments[0]();
    }
};
obj.show(fn);
