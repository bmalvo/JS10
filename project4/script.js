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
    e.preventDefault();
    // console.log('głosowanie');
    const user = userName.value;
    const password = userId.value;
    const select = voteOptions.value;

    if (validUserID.get(user) === password) {
        if (votedUsers.has(user)) {
            alert(`${user} już głosował.`)
        } else {
            // logika ważnego głosu
            votedUsers.add(user);
            voteCounts.set(select, voteCounts.get(select) +1 );
        }
    } else {
            alert("Nieprawidłowy login lub hasło.");
        }
        
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
