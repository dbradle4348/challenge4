//I know I didn't quite make the requirements for the assignment this time with the timer deductions and posting high scores, but here's where I tried everything. Thanks.

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
//
var countrightanswers = 0

let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion()
})
//start the game and timer by clicking the button
function startGame() {
    c = 100;
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    countRightAnswers = 0
    setNextQuestion()
    timer001()
}

// setting up next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//trying to pull score from here and post it to high score page with other JS sheet, it isn't working
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
    } 
    localStorage.setItem("score", countRightAnswers);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//quiz questions
var questions = [
    {
        question: 'Which of these is a type of variable in JavaScript?',
        answers: [
            { text: 'let', correct: true },
            { text: 'vrbl', correct: false },
            { text: 'yrmm', correct: false },
            { text: 'cnst', correct: false },
        ]
    },
    {
        question: 'Is JavaScript hard?',
        answers: [
            { text: 'Outrageously', correct: true },
            { text: 'sometimes', correct: true },
            { text: 'never', correct: false },
            { text: 'yes', correct: true }
        ]
    },
    {
        question: 'lorem ipsum',
        answers: [
            { text: 'yup', correct: true },
            { text: 'nope', correct: false },
            { text: 'no', correct: false },
            { text: 'wrong', correct: false },
        ]

    }
]
// timer function, trying to get it to go down by 10 seconds if answer is incorrect
function timer001() {
    c = c - 1;
    if (c < 200) {
        time001.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
    }
    if (answer != correct) {
        window.clearInterval(c-10)
    }
}

update = setInterval("timer001()", 1000);

//I don't think this does anything, borrowing from two different videos
function repeat001() {
    location.reload();
}

var endGame = function() {
    //if timer runs out end game
    if (c < 1) {
        window.alert("Game Over! You failed.");
        startButton.innerText = 'Restart'
    }
}

