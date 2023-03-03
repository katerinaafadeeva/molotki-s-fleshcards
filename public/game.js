// console.log('hi');
const gameInput = document.querySelector('#answerInput');
const gameButton = document.querySelector('#answerButton');

gameButton.addEventListener('click', (e) => {
  const { dataset } = gameButton;

  console.log(dataset);
  fetch(`http://localhost:3000/game/${dataset.theme}/${dataset.questionid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userAnswer: gameInput.value }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.location = `http://localhost:3000/game/${dataset.theme}/${data.id}`;
    });
});
