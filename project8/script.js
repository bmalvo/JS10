class DrawingApp {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.painting = false;
        this.#init();
        this.#initEvents();
    }

    #init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.strokeStyle = 'white';
    }

    #initEvents() {
        //destop methods
        //mobile methods
    }

    #startPosition() {
        this.painting = true;
        this.#draw();
    }

    #endPosition() {
        this.painting = false;
    }

    #draw() {
        // s
    }

    changeColor(color) {
        this.ctx.strokeStyle = color;
        console.log(color);
    }
}


const app = new DrawingApp();
 