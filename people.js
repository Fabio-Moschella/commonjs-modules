const fullName = require("./name.js");
const hobbies = require("./hobbies.js");
const objectFunction = () => {
  return {
    fullname: fullName,
    hobbies: hobbies,
  };
};
console.log(objectFunction());
