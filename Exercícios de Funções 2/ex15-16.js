const sum = (a, b) => a + b;

const obj = {
  name: "Miguel",
  sayThisArrow: () => {
    console.log(this); // não é o obj
  },
  sayThisTraditional: function() {
    console.log(this); // é o obj
  }
};
