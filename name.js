const userName = (name, surname) => {
  return {
    firstname: name,
    lastname: surname,
  };
};
console.log(userName("fabio", "moschella"));
module.exports = { userName };
