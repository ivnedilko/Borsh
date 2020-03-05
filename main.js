"use strict";

/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }

  ask ("Вы согласны?", showOk, showCancel);

  let sum = (a, b) => a + b;

  alert (sum (1, 3) );

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );

   
let str = `Hello`;

// получаем первый символ
alert( str[0] ); // H
alert( str.charAt(0) ); // H

let fruits = ["Яблоко", "Апельсин", "Слива"];

alert ( fruits [0] );
alert ( fruits [1] );
alert ( fruits [2] );

fruits [2] = "Груша";

alert(fruits.length);


let fruits = ["Яблоко", "Апельсин", "Слива"];

alert ( fruits.unshift () );
 
alert (fruits);

*/

/*
let arr = ["Я", "изучаю", "JS"];

/* arr.splice ( 1, 1 ); // начиная с позиции 1, удалить 1 элемент как понять с позиции 1?

arr.splice (0,3, "Давай", "танцевать");

alert( arr );



let arr = [1,2,5];

arr.splice(-1,0,3,4);

alert (arr);

let arr = [t,e,s,t];

alert (arr.slice (1,3) );


let arr = [0,1,2];

alert ( arr.concat([3,4]) );

arr.reverse ();

alert (arr);

*/

// let names = "Витя, Ира, Наташа";

// let arr = names.split(",");

// for (let name of arr) {
//   alert ("Сообщение получат: ${name}.");
// }

// function roundTo(num, digits) {    
//   return +(Math.round(num + "e+" + digits)  + "e-" + digits);
// }

// const nds = 0.2;
// const duty = 0.1;
// const priceLimit = 100;

// let priceText = prompt("Введите сумму:", 0);

// let priceNum = parseFloat(priceText);
// let overPrice = priceNum - priceLimit;
// let ndsNum = roundTo(overPrice * nds, 2);
// let dutyNum = roundTo(overPrice * duty, 2);
// let total = priceNum + ndsNum + dutyNum;

// alert(priceNum + " => налоговая часть: "+ overPrice +"  ндс: " + ndsNum + "; пошлина: " + dutyNum + "; всего: " + total);

//let number = 1;
/*let numberFloat = 1.5;
let str = "We are happy";
let bool = true;
let nullvar = null;
let undvar;

console.log("number = " + number);
console.log("numberFloat = " + numberFloat);
console.log("str = " + str);
console.log("bool = " + bool);
console.log("nullvar = " + nullvar);
console.log("undvar = " + undvar);

let str2 = "Now";
let str3 = str + " " + str2;
console.log(str3);


let fruits = ["Яблоко", "Апельсин", "Слива"];

alert ( fruits [0] );

fruits [2] = "Груша";
alert ( fruits [2] );

fruits [3] = "Гранат";
alert ( fruits [3] );

alert (fruits.length);

alert (fruits);

alert ( fruits.pop () );
alert ( fruits );

alert ( fruits.shift () );

fruits.unshift ("Инжир");
alert ( fruits ); */

/*let arr = ["Яблоко", "Апельсин", "Слива"];

for (let i = 0; i < arr.length; i++) {

  alert (arr[i]);

}

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert( fruits.length );

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");

alert (styles.shift() );
styles.unshift("Рэп", "Рэгги");

/*let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги"); 

let arr = ["Я", "изучаю", "JS"];
arr.splice (1, 1);
alert (arr); 

let arr = [1, 2];

alert (arr.concat ([3,4]) );

Преобразование массива

let length = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

alert (length);
alert(length.reverse () );

let names = "Вася, Петя, Маша";

let arr = name.split (", ");

for (let name of arr) {
  alert ( "Сообщение получат: ${name}." ); 
}

let str = "test";
alert ( str.split ("") ); */







    /*let veg = ["Буряк", "Морковь", "Картошка", "Капуста", "Лук", "Томатная паста"];
    veg.forEach(function(item, i, veg) {
      alert( i + ":" + item + " " );
    }); 
     

    let HowManyCups = prompt ( "Сколько чашек нужно приготовить?" );
    alert ("Количество чашек" + ":" + " " + HowManyCups);


    let coockingTea = ["Налить в чайник воду", "Включить чайник", "Насыпать заварку в чашки", "Залить водой заварку", "Выключить чайник"];

    coockingTea.forEach(function(item, coockingTea) {
      alert( item + " " );
    }); 


    Как варить борщ */

    function CookBorsch () {
      alert ("How cook borsh");
    }

    CookBorsch ();

    function GoToShop () {
    console.log ("Go 5 km to shop");   
    }

    GoToShop ();


    let products = "tomato paste, meat, potato, beetroot, onion";
    function Shopping () {
      let message = "Need to buy" + " : " + products;
      console.log (message);
    }

    Shopping ();

    let product = ["tomato paste", "meat", "potato", "beetroot", "onion"];
    for ( let i=0; i<product.length; i++ ) {
    alert ( product [i] );
    }

    function BringHome () {
      console.log ( "Bring products to home" );
    }

    BringHome ();

    function BoilTheBroth () {
      console.log ( "Boil the broth" );
    }

    BoilTheBroth ();
    
    function PeelVegetables () {
      let veg = ["beetroot", "potato", "onion"];
      for ( let i=0; i<veg.length; i++ ){
        console.log ( "Need to peel vegetables" + " " + veg [i] );
      }
    }

    PeelVegetables ();

    function GrateBeetroot () {
      console.log ( "Grate a beetroot" );
    }

    GrateBeetroot ();

    function Beetroot () {
      console.log ( "Put the beetroot in the pan" );
    }

    Beetroot ();

    function Potato () {
      console.log ( "Chop the potatoes" );
    }

    Potato ();

    
    