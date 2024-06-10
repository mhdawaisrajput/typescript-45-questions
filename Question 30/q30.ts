
let userNames : string[] = ["Admin", "User1", "User2", "User3", "User4"];
userNames.forEach(userNames => {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});