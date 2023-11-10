function talk() {
    var know = {
        // key is the prompt from user, value is the response from chatbot

        "hello": "Hi there &#128540;",
        "how are you": "My name is Chatty Betty.",
        "what can you do for me": "Not much for now, just keeping you busy",
        "ok": "You're welcome",
        "bye": "Chat later, bye for now",
        "tell me about yourself": "I am just a smallnyana chat bot. Keeping you busy with HTML, CSS and JavaScript.",
    };

    var user = document.getElementById("userBox").value.toLowerCase().replace(/\?/g, "");
    document.getElementById("chatLog").innerHTML = user + "<br>";

    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
        
    } else {
        document.getElementById("chatLog").innerHTML = "Sorry I don't understand...<br>";
    }
    document.getElementById("userBox").value = "";
}

