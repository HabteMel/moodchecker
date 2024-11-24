const positiveWords = [
    "accepted", "accomplished", "achievement", "admired", "adored", "adventure", "affirm", "alive",
    "amazing", "angelic", "appreciated", "awesome", "beautiful", "beneficial", "blessed", "blissful",
    "bold", "brilliant", "bubbly", "calm", "charming", "cheerful", "confident", "courageous", "creative",
    "delightful", "eager", "easygoing", "ecstatic", "efficient", "elegant", "eloquent", "energized",
    "enthusiastic", "excited", "fantastic", "fearless", "flourishing", "fortunate", "friendly", "fun",
    "generous", "gentle", "glorious", "glowing", "graceful", "grateful", "great", "happy", "harmonious",
    "helpful", "honest", "hopeful", "incredible", "inspiring", "intelligent", "joyful", "jubilant", "kind",
    "lively", "lovely", "loyal", "magnificent", "marvelous", "meaningful", "miraculous", "motivated", "nice",
    "optimistic", "outstanding", "passionate", "peaceful", "perfect", "playful", "pleasant", "pleased", "positive",
    "powerful", "proud", "radiant", "refreshing", "relaxed", "reliable", "resilient", "respectful", "rewarding",
    "safe", "secure", "sensational", "serene", "shining", "sincere", "skillful", "smart", "spectacular", "splendid",
    "strong", "successful", "supportive", "talented", "terrific", "thankful", "thoughtful", "thriving", "thrilled",
    "treasured", "trustworthy", "upbeat", "valuable", "vibrant", "victorious", "warm", "welcoming", "wise",
    "wonderful", "worthy", "zealous"
];

const negativeWords = [
    "abandoned", "abused", "afraid", "aggressive", "agonizing", "alarming", "angry", "annoyed", "anxious",
    "arrogant", "ashamed", "awful", "bad", "betrayed", "bitter", "boring", "broken", "brutal", "chaotic",
    "cold", "confused", "corrupted", "cowardly", "creepy", "cruel", "damaged", "dangerous", "dark", "defeated",
    "depressed", "desperate", "difficult", "disapproving", "discouraged", "dishonest", "dismal", "displeased",
    "disrespectful", "disturbed", "dreadful", "dull", "embarrassed", "enraged", "envious", "evil", "exhausted",
    "failing", "fearful", "forced", "frightened", "frustrated", "guilty", "harsh", "hateful", "helpless", "horrible",
    "hostile", "hurt", "ignored", "immature", "incompetent", "inconsiderate", "inconvenient", "insecure", "insensitive",
    "insulting", "jealous", "joyless", "lonely", "lost", "mad", "manipulative", "miserable", "misunderstood", "moody",
    "negative", "neglected", "nervous", "obnoxious", "offended", "painful", "panicked", "pathetic", "pessimistic",
    "pitiful", "powerless", "rejected", "remorseful", "repulsive", "resentful", "rotten", "rude", "ruthless", "sad",
    "selfish", "shameful", "shocked", "sick", "sorrowful", "spiteful", "stressed", "struggling", "stupid", "suspicious",
    "terrible", "tired", "tragic", "troubled", "unkind", "unpleasant", "upset", "useless", "vicious", "weak", "wicked",
    "worried", "worthless"
];


function detectMood(text){
    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach(word => {
        if(positiveWords.includes(word)){
            positiveCount++;
        };
        if(negativeWords.includes(word)){
            negativeCount++;
        };
    });

    if(positiveCount > negativeCount){
        return "Positive";
    } else if(negativeCount > positiveCount){
        return "Negative";
    }else{
        return "Neutral";
    };
}

function analyseText(text){
    let mood = detectMood(text);
    let displayResult = document.getElementById('resultDisplay');

    displayResult.innerHTML = `<p>Detected Mood: ${mood}</p>`;
}

document.addEventListener('DOMContentLoaded', () =>{
    const textInput = document.querySelector('input');

    textInput.addEventListener('keydown', function(event){
        if(event.key = 'enter'){
            const userInput = textInput.value; // Get the user input
            analyseText(userInput);    
        }
    })
})