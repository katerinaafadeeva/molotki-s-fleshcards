// console.log('hi');
const gameInput = document.querySelector('#answerInput');
const gameButton = document.querySelector('#answerButton');

gameButton?.addEventListener('click', (e) => {
  e.preventDefault();
  const { dataset } = gameButton;

  console.log(dataset);
  fetch(`http://localhost:3000/game/${dataset.theme}/${dataset.questionid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer: gameInput.value }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => { //заменить начиная с этого!
      if (data.id < 11) {
        // Полная перезагрузка страницы!!
        window.location.assign(
          `http://localhost:3000/game/${dataset.theme}/${data.id}`,
        );
      } else {
        // window.location = 'http://localhost:3000/cards';
        window.location.assign(`http://localhost:3000/finish`);
      }
    });
});
