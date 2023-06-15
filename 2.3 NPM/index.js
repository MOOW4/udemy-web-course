//var generateName = require("sillyname");
import generateName from "sillyname";

//var sillyName = generateName.randomAdjective();
var sillyName = generateName();
console.log(sillyName);

import generateSuper from "superheroes";
var superName = generateSuper.random();
console.log(`Samorero ${superName}`);