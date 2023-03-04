const affirmations = [
    "amazing",
    "beautiful",
    "intelligent",
    "smart",
    "funny",
    "caring",
    "creative",
    "thoughtful",
    "reflective",
    "passionate",
    "compassionate",
    "fun",
    "brilliant",
    "awesome",
    "incredible",
    "kind",
    "warm",
    "generous",
    "selfless",
    "knowledgable",
    "humble",
    "polite",
    "considerate",
    "principled",
    "giving",
    "faithful",
    "loyal",
    "a good friend",
    "a great partner",
    "one of a kind",
    "patient",
    "a good listener",
    "temperate",
    "studious",
    "hard-working",
    "competent",
    "courageous",
    "strong",
    "persistent",
    "determined",
    "sexy",
    "confident",
    "gentle"
];

function randomizer(array) {
    let randomNumber = Math.floor(Math.random()*array.length)
    return randomNumber
};


window.addEventListener("load", function(){
    // const body = document.getElementById("image");
    const affirmation = document.getElementById("affirmation");
    window.addEventListener("click", function(){
        randomNumber = randomizer(affirmations);
        console.log(randomNumber);
        affirmation.innerHTML = `
                    <div>
                    <h3 id="affirmationText">...${affirmations[randomNumber].toUpperCase()}!</h3>
                    </div>
                `;
        
    
        });

 });