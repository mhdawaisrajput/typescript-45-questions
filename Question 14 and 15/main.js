// Question 14:
var guests = ["Babar Azam", "Shahid Afridi", "Asim Azhar"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Question 15:
var unableToAttend = "Asim Azhar";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Atif Aslam";
guests[guests.indexOf(unableToAttend)] = newGuest;
// Send New Invitations.
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
