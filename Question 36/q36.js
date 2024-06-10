// Method 01.
function make_shirt() {
    var size = "medium";
    var message = "Code is Life";
    console.log("Making a ".concat(size, " shirt with a message \"").concat(message, "\" printed on it.!"));
}
;
make_shirt();
// Method 02.
function made_shirt(size, message) {
    console.log("Making a ".concat(size, " shirt with a message \"").concat(message, "\" printed on it.!"));
}
;
made_shirt("medium", "Code is Life");
