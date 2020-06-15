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

main();
