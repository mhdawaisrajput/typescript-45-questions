// Method 01.
var pizzas = ["Margherita Pizza", "Mozzarella Pizza", "Provolone Pizza"];
pizzas.forEach(function (pizzas) {
    if (pizzas === "Margherita Pizza") {
        console.log("I like Margherita Pizza.!");
    }
    else if (pizzas === "Mozzarella Pizza") {
        console.log("I like Mozzarella Pizza.!");
    }
    else if (pizzas == "Provolone Pizza") {
        console.log("I like Provolone Pizza.!");
    }
});
console.log("I really love  pizza!");
//Method 02.
pizzas.forEach(function (pizzas) {
    console.log("I like ".concat(pizzas, ".!"));
});
console.log("I really love  pizza!");
