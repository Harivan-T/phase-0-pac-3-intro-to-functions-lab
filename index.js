function shout(string){
    return string.toUpperCase();
}

console.log(shout("hello"));

function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("hello"));

function logShout(string){
    console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string){
    console.log(string.toLowerCase());
}
logWhisper("hello");



function sayHiToHeadphonedRoommate(string) {
    if(string == whisper(string))
    return "I can't hear you!"
    if(string ==shout(string))
    return "YES INDEED!" 
    if(string ==="Let's have dinner together!")
    return "I would love to!" 
  return string.toUpperCase();
}