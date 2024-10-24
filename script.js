// Hard Coded Madlibs Prompts: CAN ADD MORE
const scripts = [["Last weekend I went to a", "ADJECTIVE", "Party where everyone was dressed as", "FAMOUS PERSON", "and danced to", "MUSIC GENRE"],
["When I grow up, I want to be a", "PROFESSION", "who travels the world and discovers ", "THING TO DISCOVER"],
["Today I saw a", "ADJECTIVE", "ANIMAL", "that was", "VERB ENDING IN -ING", "in the park."]
];

// Get script and find inputs needed
function useScript (script){
    let saveIndex = [];

    script.forEach((word, index) =>{
        if(word == word.toUpperCase()){
            script[index] = `<input type="text" id="textInput" oninput="validateInput(event)" name="${word}" placeholder="${word}"></input>`;
        }
    });

    return script.join("  ");
}

// Validates user input and rejects input if it is not a letter A-z or space
function validateInput(event){
    const input = event.target.value;
    if(/[^A-Za-z\s]/.test(input)){
        event.target.value = input.replace(/[^A-Za-z\s]/g, '');
    }
}

// Function that plays the game
function playGame (){
    const randomIndex = Math.floor(Math.random() * scripts.length);
    return useScript(scripts[randomIndex]);
}

// Window loader function
window.onload = function() {
    document.getElementById("platform").innerHTML = playGame();
}