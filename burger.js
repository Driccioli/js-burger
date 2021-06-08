// var cheese = document.getElementById("cheese");
// var tomato = document.getElementById("tomato");
// var egg = document.getElementById("egg");
// var lettuce = document.getElementById("lettuce");
// var mustard = document.getElementById("mustard");
// var ketchup = document.getElementById("ketchup");

var ingredient=document.getElementsByClassName("ingredient");
var calculate=document.getElementById("calculate");
var discount= document.getElementById("discount");


calculate.addEventListener('click', function(){
    var price = 50;
    var burgerName=document.getElementById("burgerName").value;
   
    for(var i=0; i<ingredient.length; i++){
        if(ingredient[i].checked){
            price+=4;
        }
    }

    if(discount.value.length == 11){
        price -= (price/5);
    }
    document.getElementById("total").innerHTML = "$" + price.toFixed(2); 
})

