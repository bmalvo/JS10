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
        this.ctx.lineWitdh = 50;
        this.ctx.lineCap = 'round';
    }

    #initEvents() {
        //destop methods
        this.canvas.addEventListener('mousedown', (e) => {
            this.#startPosition(e);
        });
        this.canvas.addEventListener('mouseup', this.#endPosition.bind(this));
        this.canvas.addEventListener('mousemove', this.#draw.bind(this));

        //mobile methods
        this.canvas.addEventListener('touchstart', (e) => {
            this.#startPosition(e);
        });
        this.canvas.addEventListener('touchend', this.#endPosition.bind(this));
        this.canvas.addEventListener('touchmove', this.#draw.bind(this));
    }

    #startPosition(e) {
        this.painting = true;
        this.#draw(e);
    }

    #endPosition() {
        this.painting = false;
        this.ctx.beginPath();

    }

    #draw(e) {
        if (!this.painting) return; 

        let x = e.clientX || e.touches[0].clientX;
        let y = e.clientY || e.touches[0].clientY;

        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.moveTo(x, y);
    }

    changeColor(color) {
        this.ctx.strokeStyle = color;
    }
}


const app = new DrawingApp();
 