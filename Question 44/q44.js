function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with ".concat(items.join(" + "), ".")); // join will add space between arguments.
}
;
sandwich("Kabab", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
