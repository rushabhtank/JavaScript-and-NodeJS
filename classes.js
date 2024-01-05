/** @format */

class pizza {
  constructor() {
    this.size = "medium";
    this.type = "mendo";
  }
  baking() {
    console.log(
      "your pizza is " + this.size,
      "Size and made up of " + this.type
    );
  }
}

const piz = new pizza();
piz.baking();

class animal {
  constructor(name) {
    this.name = name;
  }
  setname() {
    console.log("My name is", this.name);
  }

  setsound() {
    if (this.name == "dog") {
      console.log("Bhauuu BHauuu");
    } else if (this.name == "cat") {
      console.log("Meaoo  Meaoooo");
    } else if (this.name == "cow") {
      console.log("Moooo Mooo");
    } else {
      console.log("No animal found with name", this.name);
    }
  }
}

const ani = new animal("cow");

const a = ani.setname("dog");
ani.setsound(a);
