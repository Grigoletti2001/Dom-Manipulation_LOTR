console.log("Linked.");
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const totalMordor = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];



// Chapter 1


function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  const createMiddleEarth = document.createElement('section')
  console.log(createMiddleEarth)
  createMiddleEarth.id = "middle-earth"

  for (let i = 0; i < lands.length; i++) {

    const articleTag = document.createElement('article')
    console.log(articleTag)

    articleTag.id = lands[i]
    articleTag.innerHTML = `<h1>${lands[i]}</h1>`
    createMiddleEarth.appendChild(articleTag)
    document.body.appendChild(createMiddleEarth)
  }

}


// Chapter 2


function makeHobbits() {
  console.log("2: makeHobbits");

  const updateVoyage = document.createElement('ul')

  for (let i = 0; i < hobbits.length; i++) {
    const displayLOTR = document.createElement('li')

    displayLOTR.innerHTML = hobbits[i];
    displayLOTR.setAttribute('class', "hobbit");
    updateVoyage.appendChild(displayLOTR);

  }

  document.getElementById("The-Shire").appendChild(updateVoyage);


}



// Chapter 3


function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  const divTags = document.createElement('the-ring');
  divTags.setAttribute('class', 'magic-imbued-jewelry')
  document.querySelectorAll("li")[0].appendChild(divTags)
}



// Chapter 4


function createOrcs() {
  console.log("4: createOrcs");

  const sauronsEyes = document.createElement('ul')

  for (let i = 0; i < totalMordor.length; i++) {
    sauronsEyes.innerHTML += `<li class ="totalMordor">${totalMordor[i]}</li>`

  } 
  document.getElementById("Mordor").appendChild(sauronsEyes)

}
console.log(totalMordor)


// Chapter 5


function makeBuddies() {
  console.log("5: makeBuddies");

  const trueFriendship = document.createElement("trueFriendship");
  const updateVoyage = document.createElement("ul");
  for (let i = 0; i < buddies.length; i++) {
    const companion = document.createElement("il");
    companion.setAttribute('class', "buddies");
    updateVoyage.appendChild(companion);
    trueFriendship.appendChild(updateVoyage);
  }
  document.getElementById("Rivendell").appendChild(trueFriendship);
}


// Chapter 6



function leaveTheShire() {
  console.log("6: leaveTheShire");
  const theShire = document.getElementById("The-Shire")
  const rivendell = document.getElementById("Rivendell")
  const hobbitzes = theShire.querySelector('ul')

  rivendell.appendChild(hobbitzes)
}

console.log(hobbits)

// Chapter 7

function femaleElf() {
  console.log("7: femaleElf");
  const strider = buddies[3]

  document.getElementById("Rivendell").querySelector('trueFriendship').querySelector('li').nextSibling.nextSibling.nextSibling.innerText = "Aragorn"

}



// Chapter 8


function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  const fellow = document.createElement("div")
  fellow.id = "the-fellowship"
  document.getElementById("Rivendell").appendChild(fellow)
  const eachMember = document.getElementById("Rivendell").querySelectorAll('li')
  for (let i = 0; i < eachMember.length; i++) {
    document.getElementById("the-fellowship").appendChild(eachMember[i])
    alert(`${eachMember[i].innerText} has joined your party!`)
  }
}
// Chapter 9


function theBalrog() {
  console.log("9: theBalrog");
  document.getElementById("Rivendell").querySelector('li').innerText = "Gandalf, the super sayian"
  const changeElement = document.getElementById("Rivendell").querySelector('li')
  changeElement.style.backgroundColor = 'white'
  changeElement.style.border = '2px solid grey'

}




// Chapter 10



function hornOfGondor() {
  console.log("10: hornOfGondor");
  alert("The horn of gondor has been blown!")
  alert("boromir has been killed by the Uruk-hai")
  const removeBoromir = document.getElementById("Rivendell").querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling
  removeBoromir.remove()

}


// Chapter 11


function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  document.getElementById("Mordor").appendChild(document.getElementById("Rivendell").querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling)
  document.getElementById("Mordor").appendChild(document.getElementById("Rivendell").querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling)
  const doomDiv = document.createElement('div')
  doomDiv.id = "mount-doom"
  document.getElementById("Mordor").appendChild(doomDiv)


}


 


// Chapter 12


function weWantsIt() {
  console.log("12: weWantsIt");
  const gollumIdentity = document.createElement("div")
  gollumIdentity.id = "gollum"
  document.getElementById('Mordor').appendChild(gollumIdentity)
  document.getElementById("gollum").appendChild(document.getElementById('Mordor').querySelector("li.hobbits").lastChild)
  document.getElementById("mount-doom").appendChild(document.getElementById('gollum'))

}


// Chapter 13

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  document.getElementById('gollum').remove()
  document.getElementById("The-Shire").appendChild(document.getElementById('Mordor').querySelector("li.hobbits"))
  document.getElementById("The-Shire").appendChild(document.getElementById('Mordor').querySelector("li.hobbits"))
  document.getElementById("The-Shire").appendChild(document.getElementById('Rivendell').querySelector('li.hobbits'))
  document.getElementById("The-Shire").appendChild(document.getElementById('Rivendell').querySelector('li.hobbits'))

}




document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', createOrcs);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', femaleElf);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  createOrcs();
  makeBuddies();
  leaveTheShire();
  femaleElf();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
