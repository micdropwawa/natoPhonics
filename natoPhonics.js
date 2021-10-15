const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

//NATO Phonics Alphabet conversion

const call = [{"alphabet":"a","phonic":"Alfa"}, {"alphabet":"b","phonic":"Bravo"}, {"alphabet":"c","phonic":"Charlie"}, {"alphabet":"d","phonic":"Delta"}, {"alphabet":"e","phonic":"Echo"}, {"alphabet":"f","phonic":"Foxtrot"}, {"alphabet":"g","phonic":"Golf"}, {"alphabet":"h","phonic":"Hotel"}, {"alphabet":"i","phonic":"India"}, {"alphabet":"j","phonic":"Juliett"}, {"alphabet":"k","phonic":"Kilo"}, {"alphabet":"l","phonic":"Lima"}, {"alphabet":"m","phonic":"Mike"}, {"alphabet":"n","phonic":"November"}, {"alphabet":"o","phonic":"Oscar"}, {"alphabet":"p","phonic":"Papa"}, {"alphabet":"q","phonic":"Quebec"}, {"alphabet":"r","phonic":"Romeo"}, {"alphabet":"s","phonic":"Sierra"}, {"alphabet":"t","phonic":"Tango"}, {"alphabet":"u","phonic":"Uniform"}, {"alphabet":"v","phonic":"Victor"}, {"alphabet":"w","phonic":"Whiskey"}, {"alphabet":"x","phonic":"X-ray"}, {"alphabet":"y","phonic":"Yankee"}, {"alphabet":"z","phonic":"Zulu"}]

const name = prompt("Please type the word for converting to NATO phonics ")
const nameLower = name.toLowerCase()

const find = (alpha) => {
    for (var j=0;j<alpha.length;j++){
        for (var i=0;i<call.length;i++){
            if (call[i].alphabet == alpha[j]) {
            console.log(call[i].phonic)
            j = j++
        }
    }
}
}

console.log(find(nameLower))