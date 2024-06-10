// Previous Exercise 41.
var magicians = ["David Blaine", "Harry Houdini", "David Copperfield"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
// Start with your work from Exercise 42.
var copied_magicians = ["David Blaine", "Harry Houdini", "David Copperfield"];
function make_great(copied_magicians) {
    var greatMagicians = [];
    copied_magicians.forEach(function (copied_magicians) {
        greatMagicians.push("The Great ".concat(copied_magicians));
    });
    return greatMagicians;
}
;
var greatMagicians = make_great(copied_magicians.slice());
console.log(">>>Original Magicians<<<");
show_magicians(copied_magicians); // Shows original names
console.log(">>>The Great Magicians<<<");
show_magicians(greatMagicians); // Shows modified names
