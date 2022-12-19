var myNumber = 8;
var myString = "Andrey";
var twoOrThree = 2;
twoOrThree = 3;
var StringOrBoolOrNothing = "";
var arrayOfString = ["", ""];
var arrayOfStringOrNumbers = ['', '']; //?????
arrayOfStringOrNumbers = [5, 5];
var myTuple;
var myCollectionOfNumberOrString; /////????
myCollectionOfNumberOrString = { age: 4 };
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["ADMIN"] = "4admin";
    USER_ROLES["GUEST"] = "guest";
    USER_ROLES["UNKNOWN"] = "unknown";
})(USER_ROLES || (USER_ROLES = {}));
;
;
;
;
var sumTwoNumbers = function (x, y) { return x + y; };
var sumThreeNumbers = function (x, y, z) {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
function sum(x, y) {
    if (typeof x === 'number' && typeof y === 'number')
        return x + y;
    return x.toString() + y.toString();
}
function getName(id) {
    var _a;
    return (_a = this[id]) === null || _a === void 0 ? void 0 : _a.name;
}
// Затипизировать возвращаемое значение
var sayHi = function () {
    console.log('hi');
};
var prefixedId = 'id:2';
// Нам точно известно, что в качестве параметра "x" придет число. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
var f = function (x) {
    // На данной строке нужно исправить текущую ошибку путем приведения типа "x" от текущего число или строка к только число
    return +x;
};
// переменная с типом массива строк, который нельзя изменять (например, пушить в него значения)
var readonlyStringArray; //////////////????????????????
var USER = {
    id: 1,
    name: 'Alex'
};
var getArea = function (value) {
    if (value.type === "circle") {
        return Math.PI * Math.pow(value.radius, 2);
    }
    else {
        return Math.pow(value.side, 2);
    }
};
// У функции toLowerCase ошибка типизации т.к. value может быть числом, а у числа нету метода toLowerCase. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно решать проблему любыми двумя способами.
var toLowerCase1 = function (value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    else {
        return value;
    }
};
var toLowerCase2 = function (value) {
    return value.toLowerCase();
};
// У функции log ошибка типизации, т.к. метод log есть только у класса Logger. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно исправить функцию так, чтобы метод лог вызывался только в случае если value - инстанс класса Logger, иначе логировать value c помощью console.log
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () { };
    ;
    return Logger;
}());
var log = function (value) {
    if (value instanceof Logger) {
        value.log();
    }
    else {
        console.log(value.toString());
    }
};
