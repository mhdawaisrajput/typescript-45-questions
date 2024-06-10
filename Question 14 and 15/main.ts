
// Question 14:
let guests : string[] = ["Babar Azam", "Shahid Afridi", "Asim Azhar"];
guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});



// Question 15:
let unableToAttend = "Asim Azhar";
console.log(`${unableToAttend} can't make it to dinner.`)

// Replace the guest
let newGuest : string = "Atif Aslam";
guests[guests.indexOf(unableToAttend)] = newGuest;

// Send New Invitations.
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});