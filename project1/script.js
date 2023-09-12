addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.querySelector('.rangeInput');
    const sampleText = document.querySelector('.sampleText');

    rangeInput.addEventListener('input', function() {
        sampleText.style.fontSize = this.value + 'px';
        console.log(this.value)
    });
});
