document.addEventListener('DOMContentLoaded', () => {
    const userChoiceElem = document.getElementById('user-choice');
    const computerChoiceElem = document.getElementById('computer-choice');
    const outcomeElem = document.getElementById('outcome');

    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) return 'It\'s a tie!';
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) return 'You win!';
        return 'You lose!';
    }

    document.querySelectorAll('.choice-btn').forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const result = getResult(userChoice, computerChoice);

            userChoiceElem.textContent = `Your choice: ${userChoice}`;
            computerChoiceElem.textContent = `Computer's choice: ${computerChoice}`;
            outcomeElem.textContent = `Result: ${result}`;
        });
    });
});
