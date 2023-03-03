// console.log('hi');
const gameInput = document.querySelector('#answerInput');
const gameButton = document.querySelector('#answerButton');

gameButton.addEventListener('click', (e) => {
  const { dataset } = gameButton;
  console.log(dataset);
  fetch('http://localhost:3000/game/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
