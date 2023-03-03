const FormReg = document.querySelector('#formreg');
const ListReg = document.querySelector('#listreg');

if (FormReg) {
  FormReg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { method, action, name, phone, password } = event.target;

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

    console.log(response);

    if (response.status === 400) {
      const data = await response.json();

      alert(data.message);
    } else {
      //   метод text формирует ответ с сервера в нужном формате
      const data = await response.text();

      console.log(data);
      ListReg.insertAdjacentHTML('beforeend', data);
      // window.location.href = '/salumus';
    }
  });
}
