// Question 16:
var moreGuest = ["Babar Azam", "Shahid Afridi", "Atif Aslam"];
console.log("Great news! I found a bigger dinner table!");
// Adding More Guest.
moreGuest.unshift("Humayoo Saeed");
moreGuest.splice(moreGuest.length / 2, 0, "Ahad Raza");
moreGuest.push("Billal Abbas");
moreGuest.forEach(function (moreGuest) {
    console.log("Dear ".concat(moreGuest, ", would you like to join me for dinner?"));
});
// Question 17:
console.log("Unfortunately, Due to time Shortage, I can only invite two people for dinner,.");
while (moreGuest.length > 2) {
    var removedGuest = moreGuest.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
;
moreGuest.forEach(function (moreGuest) {
    console.log("Dear ".concat(moreGuest, ", you're still invited to dinner."));
});
moreGuest.splice(0, moreGuest.length);
console.log(moreGuest); // Shows an empty list.
