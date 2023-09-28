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
        return `Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${this.#pupblishYear}`
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
        document.getElementById('searchBook').addEventListener('click', () => this.#searchBook());

    }

    #addBook() {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publishYear = document.getElementById('publishYear').value;

        const book = new Book(title, author, publishYear);
        this.#bookCollection.set(title, book);
        alert('Książka została dodana do zbioru');
    }

    #searchBook() {
        const title = document.getElementById('searchTitle').value;
        const book = this.#bookCollection.get(title);
        const resultElemnt = document.getElementById('searchResult');

        if (book) {
            resultElemnt.textContent = book.showDatails();
        } else {
            resultElemnt.textContent = 'nie mamy tej książki';
        };
    }
}

const library = new Library();
