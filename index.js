function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logshout(string){
  console.log(${shout(string)})
}

function logwhisper(string){
  console.log(whisper(string))
}