const React = require('react');
const Layout = require('./Layout');

function Finish({ title, contact, score }) {
  return (
    <Layout title={title}>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">
          Поздравляем,
          {' '}
          {contact.name}
          !
        </h4>
        <p>Вы успешно прошли тест</p>
        <hr />
        <p className="mb-0">
          Ваш счет:
          {' '}
          {score}
        </p>
      </div>
    </Layout>
  );
}
module.exports = Finish;
