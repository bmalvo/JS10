const questionData = [
    ['Które z tych imion jest brzydkie?', ['Kunegunda', 'Helga', 'Wanda'], 0],
    ['Z kim graniczy Polska?', ['z Madagaskarem', 'z Litwą'], 1],
    ['Który kot jest najładniejszy?', ['Ninja', 'Brydzia', 'Stefka'], 2],
];


class Question {
    
    #title;
    #answers;
    #correctAnswer;

    constructor(title, answers, correctAnswer) {
    
        this.#title = title;
        this.#answers = answers;
        this.#correctAnswer = correctAnswer;
    }

    get title() {
        return this.#title;
    }

    get answers() {
        return this.#answers
    }

    get correctAnswer() {
        return this.#correctAnswer
    }
 }

class Quiz {

    #questions;
    #currentQuestionIndex;
    #score;

    constructor(questions) {
        this.#questions = questions.map(question => new Question(question[0], question[1], question[2]));
        this.#currentQuestionIndex = 0;
        this.#score = 0;
    }

    displayQuestion() {
        
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        answersElement.textContent = '';

        questionElement.textContent = this.#questions[this.#currentQuestionIndex].title;
        this.#questions[this.#currentQuestionIndex].answers.forEach((answer, index) => {
            // console.log(answer);
            const answerElement = document.createElement('li');
            answerElement.innerHTML = `<label><input type='radio' value=${index} name='answer'> ${answer}</label> `
            answersElement.appendChild(answerElement); 
        });
    }

    nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        console.log(selectedAnswer);

        if (selectedAnswer) {
            console.log(selectedAnswer.value)
            if (parseInt(selectedAnswer.value) === this.#questions[this.#currentQuestionIndex].correctAnswer) {
                console.log('Brawo!');
                this.#score++;
            } else {
                console.log('Zła odpowiedź')
            }
            this.#currentQuestionIndex++;
            if (this.#currentQuestionIndex < this.#questions.length) {
                this.displayQuestion();
            } else {
                // alert(`Koniec. Zdobyłeś ${this.#score}  na ${this.#questions.length}`);
                this.displayResult();
            }
        } else {
            alert('Nie udzieliłeś odpowiedzi')
        }
    }

    displayResult() {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Koniec. Zdobyłeś ${this.#score} na ${this.#questions.length}`;
    }
}


const quiz = new Quiz(questionData);
quiz.displayQuestion();