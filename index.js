const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name:"Frank",
            type: "Flea"
        }},
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
}
}
adventurer.roll();

class Character {
    static MAX_HEALTH =  100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
}

  }

  const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
    static ROLES = ['Fighter', 'Healer', 'Wizard']
    constructor (name, role, weapon) {
        if(!ROLES.includes(role)){
            throw new Error('Must select one of the three roles: Fighter, Healer, or Wizard')
        }
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      this.weapon = weapon;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    duel(adventurer){
        while (health > 50) {
            let opposingRoll =  this.roll()
            if (opposingRoll > result) {
                health = health - 1;
            }
            else {

            }

        }
    }
  }
class companion {
    constructor (name, type, ability){
        this.name = name;
        this.type = type;
        this.health = 100;
        this.ability = ability;
    }
}
/*Accept an Adventurer as a parameter.
Use the roll() functionality to create opposing rolls for each adventurer.
Subtract 1 from the adventurer with the lower roll.
Log the results of this “round” of the duel, including the rolls and current health values.
Repeat this process until one of the two adventurers reaches 50 health.
Log the winner of the duel: the adventurer still above 50 health.*/

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");

  