class Book {
    #title
    #author
    #pupblishYear

    constructor(title, author= 'nieznany', publishYear= 'nie podano') {
        this.#title = title;
        this.#author = author;
        this.#pupblishYear = publishYear;
    }

    showDatails() {
        console.log(`Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${this.#pupblishYear}`)
    };
 }


class Library { 
    #bookCollection;

    constructor() {
        this.#bookCollection = new Map();
        this.init();
    }

    init() {
        document.getElementById('addBook').addEventListener('click', () => this.#addBook());

    } 

    #addBook() {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publishYear = document.getElementById('publishYear').value;

        const book = new Book(title, author, publishYear);
        this.#bookCollection.set(title, book);

        alert('Książka została dodana do zbioru');
        console.log(this.#bookCollection);
    }

    #searchBook() Czas filmu -> 26:38
 }

const library = new Library();
// const book = new Book('Między Bogiem a prawdą', 'Abramowica', '2023');
// console.log(book);
// book.showDatails();
