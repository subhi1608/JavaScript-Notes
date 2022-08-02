// Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

let obj1 = {
  name: "Sarvesh",
  city: "Haldwani",
};

let obj2 = {
  name: "Ayush",
  city: "Delhi",
};
let obj3={
    name:"Sumit",
    city:"Jhansi"
}
let printBio = function(age,sport){
  console.log(this.name, " is from ", this.city,". He is ",age,"years old and loves to play",sport);
};

printBio.call(obj2,25,"tennis");
// apply does the same thing ,difference is we pass arguments in the form of array rather than individually.
 printBio.apply(obj1,[20,"Football"]);

// bind creates a copy of that method wrt that object which can be invoked later on.
let saveName=printBio.bind(obj3);
saveName(19,"hockey");