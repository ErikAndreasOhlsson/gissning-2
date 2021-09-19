// Check that JavaScript file is loaded
console.log("script.js is loaded!")

//Your code here...

const question = ["What is the capital of Sweden?", "What is the capital of Denmark?"];
const answer = ["Stockholm", "Copenhagen"];

const questionAndAnswer = {
    "question": "What is the capital of Sweden?", 
    "answer": "Stockholm" 

};

// Our questions and answers
const questions = [{ "question": "What is the capital of Sweden?", "answer": "Stockholm" }, { "question": "What is the capital of Denmark?", "answer": "Copenhagen" }];

// Initial values
let score = 0;
let question = "";
let correctAnswer = "";
let yourAnswer = "";
let index = 0;

// HTML Elements
const result = document.querySelector("#result");
const showQuestion = document.querySelector("#question");
const getAnswer = document.querySelector("#input1")

// Add click listener to button
const btnCheckAnswer = document.querySelector("#checkAnswer");
btnCheckAnswer.addEventListener("click", checkAnswer);

//Set first questiion to UI
showQuestion.innerHTML = questions[index].question;


//Function that check answer and show next question
function checkAnswer() {

    // set values on variables
    question = questions[index].question;
    correctAnswer = questions[index].answer;
    showQuestion.innerHTML = question;
    yourAnswer = getAnswer.value;

    // compare input value with correct answer from questions
    if (correctAnswer.toLowerCase() == yourAnswer.toLowerCase()) {
        score++
        result.innerHTML = "Rätt svar, din poäng är " + score;
    }

    else {
        result.innerHTML = "Fel svar";
    }
    index++
    if (questions.length != index) {        
        showQuestion.innerHTML = questions[index].question;
    }
    else
        showQuestion.innerHTML = "No more questions";
}