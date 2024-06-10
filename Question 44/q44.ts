
function sandwich(...items : string[]){
    console.log(`Making a sandwich with ${items.join(" + ")}.`)  // join will add space between arguments.
};
sandwich("Kabab", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");