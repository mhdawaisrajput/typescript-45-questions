
// Question 11: 
let names : string[] = ["Asad", "Iqbal", "Parvez"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
};

// Question 12:
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
};