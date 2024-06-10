// Question 41: 
var magicians = ["David Blaine", "Harry Houdini", "David Copperfield"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians); // [ 'David Blaine', 'Harry Houdini', 'David Copperfield' ]
// Question 42: 
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is the Great Magician";
    }
}
;
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names in array
