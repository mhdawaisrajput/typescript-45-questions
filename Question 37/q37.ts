
function make_shirt(size : string = "large", message : string = "I Love Typescript"){
    console.log(`Making a ${size} shirt with a message ${message} printed on it.`)
};
make_shirt();  // Default large and message
make_shirt("medium");  // medium shirt with default message.
make_shirt("small", "Dive into Coding");  // different size of shirt with different message.