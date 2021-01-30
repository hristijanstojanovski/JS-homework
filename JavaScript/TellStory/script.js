// Create a function called tellStory()

function tellStory(name, mood, activity){
let inputs = [name, mood, activity];
return inputs
}
let nameInput = prompt("Enter your name here");
let moodInput = prompt("Enter your mood here");
let activityInput = prompt("What are you going to do all day?");
console.log(tellStory(`${nameInput} is ${moodInput} today. and because of that ${nameInput} is going to ${activityInput} all day long`));