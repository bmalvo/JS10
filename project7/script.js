const questionData = [
    ['Które z tych imion jest brzydkie?', ['Kunegunda', 'Helga', 'Wanda'], 0],
    ['Z kim graniczy Polska?', ['z Madagaskarem', 'z Litwą'], 1],
    ['Który kot jest najładniejszy?', ['Ninja, Brydzia, Stefka', 2]],
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
 }

class Quiz {

    #questions;
    #currentQuestionIndex;
    #score;

    constructor(questions) {
        this.#questions = questions.map(question => new Question(question[0], question[1], question[2]));
        console.log(this.#questions);
        this.#currentQuestionIndex = 0;
        this.#score = 0;
    }

    displayQuestion() {
        
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        questionElement.textContent = this.#questions[this.#currentQuestionIndex].title
    }
}


const quiz = new Quiz(questionData);
quiz.displayQuestion();