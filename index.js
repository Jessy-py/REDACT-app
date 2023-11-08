const messageOne = document.getElementById("message");
const scrambleWord = document.getElementById("scramble");
const messageTwo = document.getElementById("redactedText");


let message = String(messageOne).split(/["";,|]/)


const scrambleFunction = () => {
    if (!message) {
        TextError.innerHTML = "Cannot be empty"
    }
    else{
        if(scrambleWord) {
            if (message.includes(scrambleWord)) {
                const newMessage = message.replace(new RegExp(scrambleWord.join("|"), "g"), "****");
                messageTwo.innerHTML = '<p id="redactedText">Your redacted message is {newMessage}</p>'  
            }
        }
    }
}

document.getElementById("message-form").addEventListener("submit", scrambleFunction());

//As much as I tried, I couldn't get my new redacted message to show up in the frontend. I tried checking from all angles i knew but couldnt find a solution, its not my backend is it? *inserts exhaustion emoji*
//Also, I didn't get to play around with the assignment as much, I'd work on that and definitely do better next time.