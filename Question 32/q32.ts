
let current_user : string[] = ["admin", "user1", "user2", "user3", "user4"];
let new_user : string[] = ["user5", "admin", "user6", "user2", "uer7"];

new_user.forEach(new_user => {
    if (current_user.some(current_user => current_user.toLowerCase() === new_user.toLowerCase() ))
        console.log(`${new_user} will need to enter a new username.!`)
    else (
        console.log("New user is available.!")
    )
});