const quizData = [
    {
        question: '¿Cuál es la capital de Argentina?',
        a: 'La Paz',
        b: 'Montevideo',
        c: 'Buenos Aires',
        d: 'Madrid',
        correct: 'c',
    },{
        question: '¿Cuál es la capital de España?',
        a: 'La Paz',
        b: 'Montevideo',
        c: 'Buenos Aires',
        d: 'Madrid',
        correct: 'd'
    },{
        question: '¿Cuál es la capital de Italia?',
        a: 'Roma',
        b: 'Montevideo',
        c: 'Berlin',
        d: 'La Paz',
        correct: 'a'
    },{
        question: '¿Cuál es la capital de Uruguay?',
        a: 'La Paz',
        b: 'Montevideo',
        c: 'Buenos Aires',
        d: 'Madrid',
        correct: 'b'
    },{
        question: '¿Cuál es la capital de Bolivia?',
        a: 'La Paz',
        b: 'Montevideo',
        c: 'Buenos Aires',
        d: 'Madrid',
        correct: 'a'
    }
];


const quiz = document.getElementById('quiz');
//radio btn
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
//text
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

//Se va a llamar a esta función cada vez que oprimamos "Enviar"
loadQuz();

function loadQuz(){
    deselectAsnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

function getSelected(){

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;
}

function deselectAsnswers(){
    answersEls.forEach((answerEl) => {
       answerEl.checked = false;
        });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuz();
        }else{
            quiz.innerHTML = `
            <h3>¡Respondiste bien ${score}/${quizData.length} preguntas!</h3>
            
            <button onclick="location.reload()">Intentar de nuevo</button>
        `; 
        }
    }        
});

