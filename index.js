const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
tutorials = tutorials.map(function(tutorials) {
  let count = tutorials.split(" ").length;
  let arraySpace = tutorials.split(" ");
  for (let i = 0; i < arraySpace.length; i++) {
    arraySpace[i].charAt[0].toUpperCase();
  }
  let newTut = "";
  for (let i = 0; i < arraySpace.length; i++) {
    if (i == arraySpace.length - 1) {
      newTut += newTutarraySpace[i];
    } else {
      newTut += newTutarraySpace[i] + " ";
    }
  }
  return tutorials = newTut;
});
tutorials=tutorials.map
const titleCased = () => {
  return tutorials
}
