const questions = [
    {
        question: "Which language is used to create the structure of a webpage?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        answer: "HTML"
    },

    {
        question: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },

    {
        question: "Which language is used to make webpages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: ["<p>", "<h1>", "<div>", "<br>"],
        answer: "<p>"
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [".", "#", "*", "&"],
        answer: "#"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";

    current.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option");

        button.onclick = function () {
            checkAnswer(button, option);
        };

        optionsElement.appendChild(button);
    });
}

function checkAnswer(button, selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(option => {
        option.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        allOptions.forEach(option => {

            if (option.textContent === correctAnswer) {
                option.classList.add("correct");
            }

        });
    }
}

nextButton.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        questionElement.textContent = "Quiz Completed!";

        optionsElement.innerHTML = "";

        nextButton.style.display = "none";

        scoreElement.textContent =
            "Your Score: " + score + " / " + questions.length;
    }
});

showQuestion();