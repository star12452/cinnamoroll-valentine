function yes(){
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YAYY! SEE U THEN! <3";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/lol.gif";

    document.getElementById("yesButton").remove();
    
}

function not() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yesButton");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    // Define an array of random messages
    const randomMessages = [
        "PLS JUST FOR ONCE",
        "I REALLY LOVE YOU",
        "ACCEPT MEE NOWWW",
        "I'LL BE THE BEST DATE OF YOUR LIFEE",
        "I'll buy you all the food and chocolate in the world",
        "MARRY MEE",
        "I'll be your sugardaddy/sugarmommy",
        "Just this once, pretty please?",
        "We can Netflix & chill",
        "I WANT YOU PLEASE",
        "Pretty Please UwU",
        "I BEG YOU",
        "We can eat ramen together"
    ];

    // Get a random message from the array
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

    // Change the text content of the "No" button to the random message
    noButton.textContent = randomMessage;

    document.getElementsByClassName("image")[0].src = "images/cry.gif";

    let randomX, randomY;

    // Calculate random position while avoiding overlap with the "Yes" button
    do {
        randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    } while (
        randomX >= yesButton.offsetLeft - noButton.offsetWidth &&
        randomX <= yesButton.offsetLeft + yesButton.offsetWidth &&
        randomY >= yesButton.offsetTop - noButton.offsetHeight &&
        randomY <= yesButton.offsetTop + yesButton.offsetHeight
    );

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent = "PLEASE GIVE ME A CHANCE!";
    document.getElementById("name").style.display = "none";
}


