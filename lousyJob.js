let adv = [
  "Tirelessly", 
  "Hungrily", 
  "Tenaciously",
  "Proactively",
  "Retroactively"
]

let verb = [
  "worked to build", 
  "slaved to raise", 
  "created",
  "redefined",
  "reimagined",
  "built",
  "strengthened"
]

let noun = [
  "growth",
  "clients",
  "sales numbers",
  "inventory",
  "strategies",
  "revenue",
  "market share",
  "advertisements",
  "technologies",
  "career",
  "platform use"
]

let end = [
  "while balancing client requests and technological capability.",
  "at top speed.",
  "over time.",
  "under tight deadlines.",
  "around a structured framework.",
  "through a multi-faceted approach."
]


function lousyJobGenerator() {
  return adv[Math.floor(Math.random() * adv.length)] 
    + " " + verb[Math.floor(Math.random() * verb.length)] 
    + " " + noun[Math.floor(Math.random() * noun.length)] 
    + " " + end[Math.floor(Math.random() * end.length)];
}

document.getElementById("lousyJob").addEventListener("click", () => {
  const text = lousyJobGenerator();
  navigator.clipboard.writeText(text);
});