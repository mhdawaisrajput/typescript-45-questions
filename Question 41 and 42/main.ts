
// Question 41: 
let magicians : string[] = ["David Blaine", "Harry Houdini", "David Copperfield"];
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);   // [ 'David Blaine', 'Harry Houdini', 'David Copperfield' ]


// Question 42: 
function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length; i++ ){
        magicians[i] = magicians[i] + " is the Great Magician";
    }
};
make_great(magicians);   // Modifies the original array
show_magicians(magicians);       // Shows modified names in array