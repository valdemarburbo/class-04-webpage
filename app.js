alert("Hello! Welcome to Val's webpage!");

let nameInput = prompt("What is your name?");

let confirmation = confirm("So your name is " + nameInput + "?");

if (confirmation == true) {
    alert("Thanks. Welcome, " + nameInput + "!");
} else {
    nameInput = prompt("What is your name?");

    confirmation = confirm("So your name is " + nameInput + "?");
}
