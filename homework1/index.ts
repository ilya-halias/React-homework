let myNumber: number = 8;
let myString: string = "Andrey";
let twoOrThree:2|3 = 2;
twoOrThree = 3;
let StringOrBoolOrNothing: string|boolean|undefined = "";
let arrayOfString: string[]=["",""]
let arrayOfStringOrNumbers: string[]|number[] = ['','']//?????
arrayOfStringOrNumbers = [5,5]
let myTuple:[string,number,{id:number,label:string}]

let myCollectionOfNumberOrString: { [key:string]: string | number };/////????
myCollectionOfNumberOrString = {age:4};

enum USER_ROLES  {
    ADMIN = '4admin',
    GUEST= 'guest',
    UNKNOWN= 'unknown',
};

type User1 ={id:number,name:string, }
interface User2 {id:number,name:string};

type Admin1 = User1 & {isAdin:true};
interface Admin2 extends User2{isAdin:true };

type Guest1 = {readonly id:number,};
interface Guest2 {};

const sumTwoNumbers = (x:number, y:number):number => x + y;

const sumThreeNumbers = (x:number, y:number, z?:number) => {
    if (z ){
        return x+y+z
    }else {
        return x+y
    }
};

function sum(x: number, y: number): number;
function sum(x: string, y: number): string;
function sum(x: number, y: string): string;
function sum(x: string, y: string): string;

function sum (x: number | string, y: string | number): number | string {
    if (typeof x === 'number' && typeof y === 'number') return x + y;
    return x.toString() + y.toString();
}

function getName(this:{[id: string]:{name:string}},id:string) {
    return this[id]?.name;
}
// Затипизировать возвращаемое значение
const sayHi = ():void => {
    console.log('hi');
}

interface Book {}
interface Car {}
// type BookOrCar = (value:Car|Book)=> void;
type BookOrCar = Book| Car;

// Используя типы House, City, Country создать новый тип FullAddress который включает все свойства вышеперечисленных
interface House { apartment: number }
interface City { zipCode: number }
interface Country { name: string }
type FullAddress = House & City & Country ;

// переменная с типом строка, начинающаяся с префикса "id:" и дальше числовое id. Например, let myId = 'id:2'
type id=`${"id:"}${number}`;
let prefixedId: id= 'id:2';

// Нам точно известно, что в качестве параметра "x" придет число. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
const f = (x: number | string): number => {
    // На данной строке нужно исправить текущую ошибку путем приведения типа "x" от текущего число или строка к только число
    return +x;
}

// переменная с типом массива строк, который нельзя изменять (например, пушить в него значения)
let readonlyStringArray:readonly string[];//////////////????????????????

// Сделать переменную неизменяемой (чтобы на уровне типизации ее нельзя было мутировать

type user={
    readonly id:number,
    readonly name:string
}
const USER:user = {
    id: 1,
    name: 'Alex',
};

// Написать реализацию функции getArea, чтобы она рассчитывала и возвращала площадь фигуры
interface Circle { type: 'circle', radius: number }
interface Square { type: 'square', side: number }

const getArea = (value: Circle | Square): number => {
    if (value.type === "circle") {
        return Math.PI* Math.pow(value.radius, 2)
    } else {
        return Math.pow(value.side, 2)
    }
}

// У функции toLowerCase ошибка типизации т.к. value может быть числом, а у числа нету метода toLowerCase. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно решать проблему любыми двумя способами.
const toLowerCase1 = (value: string | number): number | string => {
    if (typeof value === "string") {
        return value.toLowerCase()
    } else {
        return value
    }
}
const toLowerCase2 = (value: string | number): number | string => {
    return (value as string).toLowerCase();
}
// У функции log ошибка типизации, т.к. метод log есть только у класса Logger. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно исправить функцию так, чтобы метод лог вызывался только в случае если value - инстанс класса Logger, иначе логировать value c помощью console.log
class Logger {
    log() {};
}

const log = (value: Logger | string | number | boolean) => {
    if(value instanceof Logger){
        value.log()}
    else{
        console.log(value.toString())
    }
}
