let total = prompt('How many km are left to go?');

// Your code below:
num = parseInt(total)

if (num <= 50) {
    console.log("I'm parking. I'll see you right now");
} else if (num <= 100) {
    console.log("We'll be there in 5 minutes");
} else {
    console.log("We still have a bit of driving left to go");
}
    