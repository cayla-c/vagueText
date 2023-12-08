let uno = [
  "Rancid",
  "Insane",
  "Black", 
  "Iron",
  "Holy", 
  "Rabid", 
  "Bloody",
  "Satan's", 
  "Bastard", 
  "Forsaken", 
  "Hell's", 
  "Forbidden", 
  "Dark", 
  "Frantic", 
  "Devil's", 
  "Evil", 
  "Inner", 
  "Bleeding", 
  "Guilty", 
  "Witch's", 
  "Heavy", 
  "Illegal", 
  "Fallen", 
  "Sinister", 
  "Crazy", 
  "Troubled"
];
let dos = [
  "Empire", 
  "Rage", 
  "Fury", 
  "Zombies", 
  "Sin", 
  "Warriors", 
  "Angels", 
  "Death", 
  "Anarchy", 
  "Henchmen", 
  "Kill", 
  "Vengeance", 
  "Tendencies", 
  "Magic", 
  "Soldier", 
  "Gods", 
  "Goblin", 
  "Spawn", 
  "Temple", 
  "Realm", 
  "Hate", 
  "Slaves", 
  "Thorn", 
  "Abyss", 
  "Fire", 
  "Secrets"
];

function bandGenerator() {
  return uno[Math.floor(Math.random() * uno.length)] + " " + dos[Math.floor(Math.random() * dos.length)];
}

document.getElementById("bandName").addEventListener("click", () => {
  const text = bandGenerator();
  navigator.clipboard.writeText(text);
});