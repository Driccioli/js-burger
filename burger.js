// var cheese = document.getElementById("cheese");
// var tomato = document.getElementById("tomato");
// var egg = document.getElementById("egg");
// var lettuce = document.getElementById("lettuce");
// var mustard = document.getElementById("mustard");
// var ketchup = document.getElementById("ketchup");

var ingredient=document.getElementsByClassName("ingredient");

var calculate=document.getElementById("calculate");
var discount= document.getElementById("discount");
var price = 50;

calculate.addEventListener('click', function(){
    for(var i=0; i<ingredient.length; i++){
        if(ingredient[i].checked){
            price+=4;
        }
    }

    if(discount.value.length == 11){
        console.log("Sconto attivato!");
        price -= (price/5);
    }
    console.log("$"+ price);
    document.getElementById("total").innerHTML = "$ " + price; 
})

