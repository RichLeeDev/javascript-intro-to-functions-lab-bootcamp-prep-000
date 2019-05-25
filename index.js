function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === "string"){
    return console.log("I can\'t hear you!")
  }
  if (string.toUpperCase() === 'string'){
    return console.log("YES INDEED!")
  }
  if (string === "I love you, Grandma."){
    return console.log("I love you, too.")
  }
}
  