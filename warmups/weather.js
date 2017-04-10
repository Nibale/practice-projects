//var num = 1;
//if(num > 5){
//   console.log("greater than 5")
//   }else if(num == 5) {
//       console.log("equal 5")
//   }else if(num < 5){
//       console.log("less than 5")
//   }


function weather(temperature,weather){
    if( weather === "rainy" && temperature > 15){
console.log(" bring umbrella")
    }
    else if(weather === "rainy" && temperature < 15){
        console.log("bring umbrella and jacket")
    }
    else if(weather === "sunny" && temperature > 15){
        console.log("wear a t shirt")
    } else {
        console.log('check the weather online')
    }
}

console.log(weather(17, 'rainy'));

