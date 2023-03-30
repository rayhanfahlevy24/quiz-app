const quizData = [
    {
        question: "Apa warna kesukaan gue?",
        a: "Merah",
        b: "Hitam",
        c: "Putih",
        d: "Hijau",
        correct: "d",
    },
    {
        question: "Tahun kelahiran gue?",
        a: "1390",
        b: "2000",
        c: "1997",
        d: "1998",
        correct: "b",
    },
    {
        question: "Olahraga favorit gue?",
        a: "Sepak bola",
        b: "Renang",
        c: "Basket",
        d: "Bulu tangkis",
        correct: "a",
    },
    {
        question: "Klub sepak bola favorit gue?",
        a: "Real Madrid",
        b: "Manchester United",
        c: "AC Milan",
        d: "Paris Saint-Germain",
        correct: "b",
    },
    {
        question: "Apa lagu favorit gue, kecuali",
        a: "Nasar - Seperti Mati Lampu",
        b: "The Strokes - You Only Live Once",
        c: "The 1975 - I'm In Love With You",
        d: "The Temper Trap - Sweet Disposition",
        correct: "a",
    },
    {
        question: "Klub basket favorit gue?",
        a: "Indiana Pacers",
        b: "New York Knicks",
        c: "Phoenix Suns",
        d: "Boston Celtics",
        correct: "c",
    },
    {
        question: "Apa genre film kesukaan gue, kecuali",
        a: "Action",
        b: "Thriller",
        c: "Horror",
        d: "Drama",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})