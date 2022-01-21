const questions = [
    "Що таке JS?",
    "Як правильно оголошувати фунцію?",
    "Як правильно викликати функцію MyFn?",
    "Що вийде, якщо скласти true + false?",
    "Де в документі може бути тег script за стандартом HTML?",
    "Де правильно вказано запуск спливаючого вікна?",
    "Де вірно вказано виведення даних?",
    "Як створити новий масив у JavaScript?"
]
const answers = [
    ['Мова програмування', 'Бібліотека', 'Мова розмітки гіпертексту'],
    ['function NewFn () {}', 'NewFn()', 'NewFn => {}'],
    ['MyFn()', 'MyFn = () => {}', 'MyFn => {}'],
    ['1', '0', 'NaN'],
    ['У head або body', 'Тільки в body', 'Де завгодно, головне щоб був'],
    ['alert ("Hi")', 'new alert ("Hi")', 'info ("Hi")'],
    ['console.log("Hello");', 'write("Hello");', 'prompt("Hello");'],
    ["let colors = ['yellow', 'purple', 'blue']", "var colors = 'yellow', 'purple', 'blue'", "const colors = (1:'yellow', 2:'purple', 3:'blue')"]
]
let questionNumber = 0;
let btn = document.querySelector(".nextQuestion");
let question = document.querySelector(".question");
let answer1 = document.getElementById("answerText1");
let answer1Li = document.querySelector(".answer1");
let answer2 = document.getElementById("answerText2");
let answer2Li = document.querySelector(".answer2");
let answer3 = document.getElementById("answerText3");
let answer3Li = document.querySelector(".answer3");
let result = 0;

function getResult(answer) {
    if (answer == 1) {
        result++;
        answer1.style.background = "#00b500";
        answer1.style.animation = "correct 2.5s ease-in";
        answer2.style.background = "none";
        answer3.style.background = "none";
        btn.disabled = false;
        answer1.onclick = null;
        answer2.onclick = null;
        answer3.onclick = null;
    } else if (answer == 2) {
        answer2.style.background = "#ff3c3c";
        answer2.style.animation = "incorrect 2.5s ease-in";
        answer1.style.background = "none";
        answer3.style.background = "none";
        btn.disabled = false;
        answer1.onclick = null;
        answer2.onclick = null;
        answer3.onclick = null;
    } else if (answer == 3) {
        answer3.style.background = "#ff3c3c";
        answer3.style.animation = "incorrect 2.5s ease-in";
        answer1.style.background = "none";
        answer2.style.background = "none";
        btn.disabled = false;
        answer1.onclick = null;
        answer2.onclick = null;
        answer3.onclick = null;
    }
}

// TODO - find out why addEventListener doesn't work

document.querySelector('.answersList').style.display = 'none';

update = () => {
    answer1.style.animation = "none";
    answer2.style.animation = "none";
    answer3.style.animation = "none";

    if (questionNumber < questions.length) {
        document.querySelector('.answersList').style.display = 'grid';

        btn.innerHTML = 'Наступне питання';
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answers[questionNumber][0];
        answer1Li.style.order = Math.floor(Math.random() * 3);
        answer2.innerHTML = answers[questionNumber][1];
        answer2Li.style.order = Math.floor(Math.random() * 3);
        answer3.innerHTML = answers[questionNumber][2];
        answer3Li.style.order = Math.floor(Math.random() * 3);
        questionNumber++;
        answer1.style.background = "none";
        answer2.style.background = "none";
        answer3.style.background = "none";
        btn.disabled = true;
        answer1.onclick = () => {
            getResult(1);
        };
        answer2.onclick = () => {
            getResult(2);
        };
        answer3.onclick = () => {
            getResult(3);
        };
        answer1.style.background = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
        answer2.style.background = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
        answer3.style.background = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    } else {
        question.innerHTML = 'Тест закінчено!';
        const answersList = document.querySelector('.answersList');
        answersList.style.display = 'none';
        btn.innerHTML = 'Ваш результат ' + result;
    }
}
btn.addEventListener("click", update);