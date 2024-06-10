var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["Oman", "Bangaladesh", "Malaysia", "Saudi Arabia", "Turkey"];
console.log("Original Order :", locations);
console.log("Alphabetical Order :", __spreadArray([], locations, true).sort());
console.log("Original Order :", locations);
console.log("Reverse Alphabetical Order :", __spreadArray([], locations, true).sort().reverse());
console.log("Original Order :", locations);
console.log("Reverse Order :", locations.reverse());
console.log("Original Order :", locations.reverse());
console.log("Alphabetical Order :", __spreadArray([], locations, true).sort());
console.log("Reverse Alphabetical Order :", __spreadArray([], locations, true).reverse());
