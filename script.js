const quizData = [
    {
        question: 'How old is Prince?',
        a: '18',
        b: '25',
        c: '21',
        d: '28',
        correct: 'c'
    },
    {
        question: 'How many siblings does Prince have?',
        a: '6',
        b: '4',
        c: '1',
        d: '9',
        correct: 'b'
    },
    {
        question: 'What are Prince interests?',
        a: 'Weight training',
        b: 'Fashion',
        c: 'Music',
        d: 'All of the above',
        correct: 'd'
    },
    {
        question: 'What year was Prince born?',
        a: '2001',
        b: '1997',
        c: '1994',
        d: '2004',
        correct: 'a'
    },
    {
        question: 'What sports did Prince play?',
        a: 'Baseball',
        b: 'Football',
        c: 'Basketball',
        d: 'Soccer',
        correct: 'b'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
}

submitBtn.addEventListener('click',() =>{
    currentQuiz++;
    
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } 
    else {
        alert("You finished!");
    }
});