// User selects an option and will get +10 points if the answer is correct and -3 if its not correct. After that, new question will appear until the end of all questions
// At the end we show a game over message that says how much point they got

let questions = [
  {
    question: "Who dreamed of a dream of somebody?",
    answers: ["Marc", "Luke", "Arne", "Oerd"],
    correctAnswer: "Oerd",
  },
  {
    question: "Capital of Spain is?",
    answers: ["Barcelona", "Madrid", "Sevilla", "Bilbao"],
    correctAnswer: "Madrid",
  },
  {
    question: "Marc dog name is?",
    answers: ["Marc", "Luke", "Arne", "Oerd"],
    correctAnswer: "Luke",
  },
  {
    question: "Where did Julia lived? ",
    answers: ["New Zealand", "Austria", "Barcelona", "Brazil"],
    correctAnswer: "New Zealand",
  },
];

let trivial = document.getElementById("trivial-group");

let index = 0;
let points = 0;

function generateTriviaHtml(arrayOfQuestions, index, currentPoints) {
  let trivialToHtml = `
  <h3>${arrayOfQuestions[index].question}</h3>
  <div class="options">
    <div class="row-options">
      <button class="option-btn">${arrayOfQuestions[index].answers[0]}</button>
      <button class="option-btn">${arrayOfQuestions[index].answers[1]}</button>
    </div>
    <div class="row-options">
      <button class="option-btn">${arrayOfQuestions[index].answers[2]}</button>
      <button class="option-btn">${arrayOfQuestions[index].answers[3]}</button>
    </div>
  </div>
  <h4 class="points">${currentPoints} points</h4>
`;

  trivial.innerHTML = trivialToHtml;
}

generateTriviaHtml(questions, index, points);
