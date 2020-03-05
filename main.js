"use strict";


    /*let HowManyCups = prompt ( "Сколько чашек нужно приготовить?" );
    alert ("Количество чашек" + ":" + " " + HowManyCups);


    let coockingTea = ["Налить в чайник воду", "Включить чайник", "Насыпать заварку в чашки", "Залить водой заварку", "Выключить чайник"];

    coockingTea.forEach(function(item, coockingTea) {
      alert( item + " " );
    }); */


   function CookBorsch () {
      console.log ("How cook borsh");
      console.log ("Go 5 km to shop");
        let product = ["tomato paste", "meat", "potato", "beetroot", "onion"];
        for ( let i=0; i<product.length; i++ ) {
        console.log ( "Need buy" + product [i] );
    }
      console.log ( "Bring products to home" );
      console.log ( "Boil the broth" );
        let veg = ["beetroot", "potato", "onion"];
        for ( let i=0; i<veg.length; i++ ){
        console.log ( "Need to peel vegetables" + " " + veg [i] );}
      console.log ( "Grate a beetroot" );
      console.log ( "Chop the potatoes" );    
    }
    
    CookBorsch ();
