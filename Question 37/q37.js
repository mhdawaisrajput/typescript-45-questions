function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making a ".concat(size, " shirt with a message ").concat(message, " printed on it."));
}
;
make_shirt(); // Default large and message
make_shirt("medium"); // medium shirt with default message.
make_shirt("small", "Dive into Coding"); // different size of shirt with different message.
