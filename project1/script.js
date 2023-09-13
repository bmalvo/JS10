addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.querySelector('.rangeInput');
    const sampleText = document.querySelector('.sampleText');
    const fontSelector = document.querySelector('.fontSelector'); 

    rangeInput.addEventListener('input', function() {
        sampleText.style.fontSize = this.value + 'px';
        console.log(this.value)
    });

    fontSelector.addEventListener('change', () => {
        sampleText.style.fontFamily = fontSelector.value;
    });
});
