const chatArea = document.querySelector(".chat-area");
const userInput = document.querySelector("#user-input");
const sendBtn = document.querySelector("a");
const form = document.querySelector('form');

let userMeowed = false;

function handleSubmit(event) {
    event.preventDefault();

    // Wenn ein Benutzer eine Eingabe sendet, erstelle einen neuen Blasencontainer und eine Blase,
    // um die Benutzereingabe im Chat anzuzeigen.
    if (userInput.value !== "") {
        const userString = userInput.value;

        const newBubbleContainer = document.createElement("div");
        newBubbleContainer.classList.add("d-flex", "align-items-center", "chat-container", "user-container");
        newBubbleContainer.innerHTML = '<div class="avatar"><img src="user.png" /></div>';

        let newBubble = document.createElement("div");
        newBubble.classList.add("chat-bubble", "user-bubble");
        newBubble.innerHTML = userInput.value;
        newBubbleContainer.appendChild(newBubble);
        chatArea.appendChild(newBubbleContainer);
        userInput.value = ""; 



        //Erstellen Antwort
        
       
            const numberOfMeows = Math.floor(Math.random() *20);
            console.log(numberOfMeows);
            let meows = "Meow"; 
            
        if (numberOfMeows == 0) {
                meows += "."; 
        } else {
                for (let i = 0; i < numberOfMeows; i++) {

                    if (numberOfMeows < 3 && i == numberOfMeows - 1) { 
                        meows += " meow.";
                    } else if (i == numberOfMeows - 1) {
                        meows += "- meow moew :)"; 
                    } else {
                        meows += " meow,";
                    }
                }
            }

      

        const newBubble2Container = document.createElement("div");
        newBubble2Container.classList.add("d-flex", "align-items-center", "chat-container", "cat-gpt-container");
        newBubble2Container.innerHTML = '<div class="avatar"><img src="/cat.jpg" /></div>';

        const newBubble2 = document.createElement("div");
        newBubble2.classList.add("d-flex", "align-items-center", "chat-bubble", "cat-bubble");
        newBubble2.innerHTML = "..."; 
        newBubble2Container.appendChild(newBubble2);
        chatArea.appendChild(newBubble2Container);
        
        let currentMeow = 0;

        const meowLoop = setInterval(() => { 
            if (currentMeow < meows.length) {
                currentMeow += Math.floor(Math.random() * 10); 
                newBubble2.innerHTML = meows.slice(0, currentMeow) + "|"; 
            } else {
                newBubble2.innerHTML = meows; 
                clearInterval(meowLoop);
                userInput.focus(); 
            }
        }, 500);

    }

}
sendBtn.addEventListener("click", handleSubmit);
form.addEventListener("submit", handleSubmit); 



