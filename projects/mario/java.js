var cheepcheep = document.getElementById("cheepcheep-price");
var cheepcheepAmount = document.getElementById("cheepcheep-amount");

var bomba = document.getElementById("bomba-price");
var bombaAmount = document.getElementById("bomba-amount");

var gombas = document.getElementById("gombas-price");
var gombasAmount = document.getElementById("gombas-amount");


var total = document.getElementById("press");
var totalmario = document.getElementById("total-mario");

total.addEventListener("click", function () {
    cheepcheepAmount.value = cheepcheep.value * 5
    bombaAmount.value = bomba.value * 7
    gombasAmount.value = gombas.value * 11
    totalmario.value = Number(cheepcheepAmount.value) + Number(bombaAmount.value) + Number(gombasAmount.value);
})

//    var cheepcheepAmount = document.getElementById(cheepcheep.value) = cheepcheepNum * 7;
//    var bombaNumber = bomba.value;
//    var bombaAmount = document.getElementById("bomba.").value = bombaNum * 11;
//    var gombasNumber = gombas.value;
//    var gombasAmount = document.getElementById("gombas-amount").value = gombasNum * 5;
//    }
//
//)