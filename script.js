let username = prompt("Please tell me your name.")

let confirmation = confirm("So your name is " + username + "?")

if (confirmation == true) {
    document.write("Thanks. Hi " + username);
} else {
    document.write("Sorry, I got your name wrong");
}

function addition(a, b) {
    console.log(a + b);
}

addition(2, 5);