
// Previous Exercise 41.
let magicians : string[] = ["David Blaine", "Harry Houdini", "David Copperfield"];
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);

// Start with your work from Exercise 42.
let copied_magicians : string[] = ["David Blaine", "Harry Houdini", "David Copperfield"];
function make_great(copied_magicians: string[]): string[] {
    let greatMagicians : any[] = [];
    copied_magicians.forEach(copied_magicians =>{
        greatMagicians.push(`The Great ${copied_magicians}`);
    })
    return greatMagicians;
};
let greatMagicians = make_great(copied_magicians.slice());
console.log(">>>Original Magicians<<<");
show_magicians(copied_magicians);   // Shows original names
console.log(">>>The Great Magicians<<<");
show_magicians(greatMagicians)    // Shows modified names