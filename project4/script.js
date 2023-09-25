const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');
const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');
const resultDiv = document.querySelector('.vote-results');



const validUserID = new Map([
    ['Romuś', '12345678'],
    ['Stasio', '11111111'],
    ['Barti', '12341234'],
    ['Dżastina', '00000001']
]);

const voteCounts = new Map();
voteCounts.set('Opcja 1', 0);
voteCounts.set('Opcja 2', 0);
voteCounts.set('Opcja 3', 0);

const votedUsers = new Set();

const voting = (e) => {
    e.preventDefoult();
    console.log('głosowanie');
    updateResult();
}
const updateResult = () => {
    output = ''
    for (const [option, count] of voteCounts) {
        output += `<p>${option}: ${count} głosów.</p>`;        
    }
    resultDiv.innerHTML = output;
}

votingForm.addEventListener('submit', voting);

// updateResult();
