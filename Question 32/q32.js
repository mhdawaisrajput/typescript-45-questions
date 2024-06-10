var current_user = ["admin", "user1", "user2", "user3", "user4"];
var new_user = ["user5", "admin", "user6", "user2", "uer7"];
new_user.forEach(function (new_user) {
    if (current_user.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); }))
        console.log("".concat(new_user, " will need to enter a new username.!"));
    else
        (console.log("New user is available.!"));
});
