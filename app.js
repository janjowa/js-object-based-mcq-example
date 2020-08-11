var questionBank = [
  {
    id: 1,
    question:
      "Smallest particle of an element which may or may not have independent existence",
    a: "a molecule",
    b: "an atom",
    c: "an ion",
    d: "an electron",
    answer: "b",
  },
  {
    id: 2,
    question: "Swedish chemist J. Berzelius determined the",
    a: "atomic no.",
    b: "atomic volume",
    c: "atomic mass",
    d: "atomic density",
    answer: "c",
  },
  {
    id: 3,
    question: "The number of atoms present in a molecule determine its",
    a: "molecularity ",
    b: "basicity",
    c: "acidity ",
    d: "atomicity",
    answer: "d",
  },
  {
    id: 4,
    question: "When an electron is added to a unipositive ion we get",
    a: "anion ",
    b: "cation",
    c: "neutral atom",
    d: "molecule",
    answer: "c",
  },
  {
    id: 5,
    question: "CO<sup>+</sup> is an example of",
    a: "free radical",
    b: "cationic molecular ion",
    c: "an ionic molecular ion",
    d: "stable molecule",
    answer: "b",
  },
  {
    id: 6,
    question:
      "Relative atomic mass is the mass of an atom of an element as compared to the mass of",
    a: "oxygen ",
    b: "hydrogen",
    c: "nitrogen ",
    d: "carbon",
    answer: "d",
  },
  {
    id: 7,
    question:
      "Isotopes are the sister atoms of the same element with similar chemical properties and different",
    a: "atomic number",
    b: "atomic mass",
    c: "atomic volume",
    d: "atomic structure",
    answer: "b",
  },
  {
    id: 8,
    question:
      "The instrument which is used to measure the exact masses of different isotopes of an element called",
    a: "I.R. Spectrophotometer",
    b: "U.V. Spectrophotometer",
    c: "Mass Spectrometer",
    d: "Colourimeter",
    answer: "c",
  },
  {
    id: 9,
    question:
      "Mass spectrometer separates different positive isotopic ions on the basis of their",
    a: "mass value",
    b: "m/e value",
    c: "e/m value",
    d: "change value",
    answer: "b",
  },
  {
    id: 10,
    question:
      "Simplest formula that gives us information about the simple ratio of atoms in a compound is called",
    a: "structural formula",
    b: "molecular formula",
    c: "empirical formula",
    d: "molar ratio",
    answer: "c",
  },
];
var oldScore = 0;
var currentQuestion = 0;
var selectedOption = "z";

function nextQuestion(e) {
  document.getElementById("questionNum").innerHTML =
    "Question Number " + (currentQuestion + 1);

  document.getElementById("question").innerHTML =
    questionBank[currentQuestion].question;

  document.getElementById("optionsAll").innerHTML =
    "<input type='radio' value='a' name='options' id='a' onclick='getOption(a)'/> " +
    questionBank[currentQuestion].a +
    " <hr />  <input type='radio' value='a' name='options' id='b'  onclick='getOption(b)'/> " +
    questionBank[currentQuestion].b +
    "  <hr />  <input type='radio' value='a' name='options' id='c'  onclick='getOption(c)'/> " +
    questionBank[currentQuestion].c +
    "  <hr />  <input type='radio' value='a' name='options' id='d'  onclick='getOption(d)'/> " +
    questionBank[currentQuestion].d +
    "  <hr />";
  checkAnswer();

  currentQuestion = currentQuestion + 1;
}

function getOption(e) {
  selectedOption = e.id;
}

function checkAnswer() {
  if (currentQuestion > 0) {
    currentQuestionNum = currentQuestion - 1;
  } else {
    currentQuestionNum = currentQuestion;
  }
  var realAnswer = questionBank[currentQuestionNum].answer;

  if (selectedOption == realAnswer) {
    oldScore = oldScore + 10;
  }
  document.getElementById("score").innerHTML = "Score: " + oldScore;
}
