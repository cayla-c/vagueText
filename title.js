let first = [
  "Situating",
  "Reinterpreting",
  "Critiquing", 
  "A Reading Of",
  "Activating", 
  "The Politics of", 
  "Representations of",
  "Interrogating", 
  "Erasing", 
  "Redefining", 
  "Identifying", 
  "Reimagining", 
  "Performing", 
  "The Legibility of", 
  "Democratizing", 
  "De-Centering", 
  "Gender and", 
  "Debating", 
  "Signaling", 
  "Embodying", 
  "Building", 
  "The Role of", 
  "Historizing", 
  "Repositioning", 
  "Destabilizing", 
  "Mapping"
];
let second = [
  "Spaces", 
  "Bodies", 
  "Identity", 
  "Narratives", 
  "Politics and Power", 
  "Aesthetics", 
  "Representation", 
  "Historical Categories", 
  "Pluralities", 
  "Gender", 
  "The Gaze", 
  "Forms of Oppression", 
  "Silences", 
  "Power Structures", 
  "Dissent", 
  "Normativity", 
  "Progress", 
  "Erasure", 
  "The Self", 
  "Queerness", 
  "Modes of Being", 
  "Ontology", 
  "Agency", 
  "Epistemologies", 
  "Intertextuality", 
  "Fields of Belonging"
];
let third = [
  "as a Site of Resistance", 
  "as Performance", 
  "as Coded Queerness", 
  "as Cultural Mediators", 
  "as Transformative Justice", 
  "as Violence", 
  "in an Intersectional Framework", 
  "in New Media", 
  "as a Form of Erasure", 
  "as a Site of Political Contestation", 
  "in Crisis", 
  "Through a Critical Lens"
]

function titleGenerator() {
  return first[Math.floor(Math.random() * first.length)] + " " + second[Math.floor(Math.random() * second.length)] + " " + third[Math.floor(Math.random() * third.length)];
}

document.getElementById("paperTitle").addEventListener("click", () => {
  const text = titleGenerator();
  navigator.clipboard.writeText(text);
});
