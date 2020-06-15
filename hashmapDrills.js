const Hashmaps = require("./hashmaps.js");
const HashMap = require("./hashmaps.js");

function main() {
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const lotr = new Hashmaps();

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log("TESTING", lotr);

  // console.log("MAIAR ", lotr.get("Maiar"));
  // console.log("Hobbit", lotr.get("Hobbit"));
  //this is the first thing retrieved under this hash value because it dedups other keys copies

  //capacity is 24
}

// 2) It outputs 20, 10.  Each time the key gets overwritten with a new value

// 3) https://imgur.com/a/rvRFuvs

// 4)

function removeDup(str) { // I HATE THIS SOLUTION, THERE IS NO WAY THIS IS RIGHT.
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const hash = new Hashmaps();

  let final = '';
  for (let i = 0; i < str.length; i++) {
    try {
      hash.get(str[i]);
    }
    catch (e) {
      hash.set(str[i], i);
      final += str[i];
    }
  }

  return final;
  
}

console.log(removeDup('google'));
console.log(removeDup('google all that you think can think of'));

// 5)

function permPal(str) {
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const hash = new Hashmaps();

  for (let i = 0; i < str.length; i++) {
    try {
      hash.get(str[i]);
      let val = hash.get(str[i]);
      hash.set(str[i], val + 1);
    }
    catch (e) {
      hash.set(str[i], 1);
    }
  }

  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (hash.get(str[i]) % 2 === 1){
      counter ++;
    }
  }
  return (counter < 2);
}

console.log(permPal('north'));


// 6)






main();
