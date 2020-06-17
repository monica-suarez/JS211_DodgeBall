// 'use strict';
const assert = require('assert');

const arrOfPeople = [
    {
      id: 1,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 2,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 3,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 4,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 5,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 6,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 7,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = id;
      this.name = name;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall; 
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
    }
  }
  class BlueTeammate {
    constructor(id, name, teamColor, mascot){
      this.id = id;
      this.name = name;
      this.teamColor = teamColor;
      this.mascot = mascot;
    }
  }
  class RedTeammate {
    constructor(id, name, teamColor, mascot){
      this.id = id;
      this.name = name;
      this.teamColor = teamColor;
      this.mascot = mascot;
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {
        makePlayer(person.id) 
        listElement.removeChild(li)
      } )
      li.appendChild(button)
      li.appendChild(document.createTextNode(" " + person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
     let person = arrOfPeople.find(function (player) {
     return player.id === id
    });
    console.log(person)
    let index = arrOfPeople.indexOf(person);
    arrOfPeople.splice(index, 1);
    const newPlayer = new Player (person.id, person.name, true, true, true, true, 5)
    // console.log(newPlayer)
    listOfPlayers.push(newPlayer)
    // console.log(listOfPlayers)
    const listElement = document.getElementById('players')
      const li = document.createElement("li")
      redButton = document.createElement("button")
      blueButton = document.createElement("button")
      redButton.innerHTML = "Red"
      redButton.style.color = "white"
      redButton.style.backgroundColor = "tomato"
      blueButton.innerHTML = "Blue"
      blueButton.style.color = "white"
      blueButton.style.backgroundColor = "royalBlue"
      redButton.addEventListener('click', function() {
        assignRedTeam(person.id)
        listElement.removeChild(li)
      })
      blueButton.addEventListener('click', function() {
        assignBlueTeam(person.id)
        listElement.removeChild(li)
      })
      li.appendChild(redButton)
      li.appendChild(blueButton)
      li.appendChild(document.createTextNode(" " + person.name))
      listElement.append(li)
}; 

const assignBlueTeam = (id) => {
  let person = listOfPlayers.find(function (player) {
    return player.id === id
   });
   let index = listOfPlayers.indexOf(person);
   listOfPlayers.splice(index, 1);
   const newBlueTeammate = new BlueTeammate (person.id, person.name, "Blue", "Ice Dragons")
   blueTeam.push(newBlueTeammate)
  const listElement = document.getElementById('blue')
    const li = document.createElement("li")
    undoButton = document.createElement("button")
    undoButton.innerHTML = "Undo"
    undoButton.addEventListener('click', function() {
      undoBlue(person.id)
      listElement.removeChild(li)
    })
    li.appendChild(undoButton)
    li.appendChild(document.createTextNode(` ${person.name}, Blue Team, Ice Dragons`))
    listElement.append(li)
};

const assignRedTeam = (id) => {
  let person = listOfPlayers.find(function (player) {
    return player.id === id
  });
  let index = listOfPlayers.indexOf(person);
  listOfPlayers.splice(index, 1);
  const newRedTeammate = new RedTeammate (person.id, person.name, "Red", "Sloths")
  redTeam.push(newRedTeammate)
 const listElement = document.getElementById('red')
   const li = document.createElement("li")
   undoButton = document.createElement("button")
   undoButton.innerHTML = "Undo"
   undoButton.addEventListener('click', function() {
      undoRed(person.id)
     listElement.removeChild(li)
   })
   li.appendChild(undoButton)
   li.appendChild(document.createTextNode(` ${person.name}, Red Team, Sloths`))
   listElement.append(li)
};

const undoBlue = (id) => {
  let person = blueTeam.find(function (player) {
    return player.id === id
   });
   console.log(person)
   let index = blueTeam.indexOf(person);
   blueTeam.splice(index, 1);
    const newPlayer = new Player (person.id, person.name, true, true, true, true, 5)
   listOfPlayers.push(newPlayer)
   const listElement = document.getElementById('players')
     const li = document.createElement("li")
     redButton = document.createElement("button")
     blueButton = document.createElement("button")
     redButton.innerHTML = "Red"
     redButton.style.color = "white"
     redButton.style.backgroundColor = "tomato"
     blueButton.innerHTML = "Blue"
     blueButton.style.color = "white"
     blueButton.style.backgroundColor = "royalBlue"
     redButton.addEventListener('click', function() {
       assignRedTeam(person.id)
       listElement.removeChild(li)
     })
     blueButton.addEventListener('click', function() {
       assignBlueTeam(person.id)
       listElement.removeChild(li)
     })
     li.appendChild(redButton)
     li.appendChild(blueButton)
     li.appendChild(document.createTextNode(" " + person.name))
     listElement.append(li)
}; 

  const undoRed = (id) => {
  let person = redTeam.find(function (player) {
    return player.id === id
   });
   console.log(person)
   let index = redTeam.indexOf(person);
   redTeam.splice(index, 1);
    const newPlayer = new Player (person.id, person.name, true, true, true, true, 5)
   listOfPlayers.push(newPlayer)
   const listElement = document.getElementById('players')
     const li = document.createElement("li")
     redButton = document.createElement("button")
     blueButton = document.createElement("button")
     redButton.innerHTML = "Red"
     redButton.style.color = "white"
     redButton.style.backgroundColor = "tomato"
     blueButton.innerHTML = "Blue"
     blueButton.style.color = "white"
     blueButton.style.backgroundColor = "royalBlue"
     redButton.addEventListener('click', function() {
       assignRedTeam(person.id)
       listElement.removeChild(li)
     })
     blueButton.addEventListener('click', function() {
       assignBlueTeam(person.id)
       listElement.removeChild(li)
     })
     li.appendChild(redButton)
     li.appendChild(blueButton)
     li.appendChild(document.createTextNode(" " + person.name))
     listElement.append(li)
}; 


//Unit Tests
// if (typeof describe === 'function'){
//   describe('CrewMember', function(){
//     it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
//       const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//       assert.equal(crewMember1.name, 'Rick Martinez');
//       assert.equal(crewMember1.job, 'pilot');
//       assert.equal(crewMember1.specialSkill, 'chemistry');
//       assert.equal(crewMember1.ship, null);
//     });

//     it('can add a person from List of People to Dodgeball Players', function(){
//       // this adds a person from the list of players to the Dodgeball roster
//       const newPlayer = new Player (8, "Mocha", true, true, true, true, 5);
//       makePlayer(id);
//       assert.equal(listOfPlayers[8].name, "Mocha");
//       assert.equal(listOfPlayers[8].yearsExperience, 5);
//       assert.equal(listOfPlayers[8].canDodgeBall, true);
//     });
//   });
// }
