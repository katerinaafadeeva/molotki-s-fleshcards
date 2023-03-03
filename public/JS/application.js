// console.log(123);
const FormReg = document.getElementById('form');
const ListReg = document.querySelector('#listreg');
// console.log(FormReg);
if (FormReg) {
  FormReg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { method, action, name, phone, password } = event.target;
    // console.log(name, phone);
    // response ответ с сервера
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value,
        password: password.value,
      }),
    });

    // console.log(response);

    if (response.status === 400) {
      const data = await response.json();

      alert(data.message);
    } else {
      //   метод text формирует ответ с сервера в нужном формате
      const data = await response.json();
      console.log(data);
      if (data.message) {
        window.location.href = '/cards';
      }
    }
  });
}
