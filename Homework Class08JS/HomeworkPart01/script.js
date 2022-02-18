console.log("--------Homework Part 01--------");

let inputDogSays = document.getElementById("dogSays");
let btn = document.getElementById("btn");
let dogSays = document.getElementById("PrintDogSays");

let dog = {
    name: "Baron",
    kind: "Staford",
    speak: function(text){
        return `Dog says: ${text}`;
    }
};

// console.log(dog.speak(inputDogSays.value));

console.log(dog.name);

btn.addEventListener('click', function(){
    dogSays.innerHTML = dog.speak(inputDogSays.value);
    
    
});






// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”


