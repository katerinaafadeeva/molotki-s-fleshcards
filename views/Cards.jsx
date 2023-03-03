const React = require('react');
const Layout = require('./Layout');

function Cards({ title }) {
  return (
    <Layout title={title}>
      <h1>PRIVYAO</h1>
      <div
        className="card text-center mb-3 bg-dark"
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          border: 'none',
          margin: '110px',
        }}
      >
        <div
          className="card-body"
          style={{
            maxWidth: '300px',
            border: '2px solid grey',
          }}
        >
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text text-white">Жизнь Эльбруса</p>
          <a
            href="/game/elbrusLife/1"
            className="btn btn-primary"
            style={{ width: '150px' }}
          >
            play
          </a>
        </div>
        <div
          className="card-body"
          style={{
            maxWidth: '300px',
            maxHeight: '200px',
            border: '2px solid grey',
          }}
        >
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text text-white">Все о котиках</p>
          <a
            href="/game/catslife"
            className="btn btn-primary"
            style={{ width: '150px' }}
          >
            play
          </a>
        </div>
        <div
          className="card-body"
          style={{ maxWidth: '300px', border: '2px solid grey' }}
        >
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text text-white">Общие темы</p>
          <a
            href="/game/generallife"
            className="btn btn-primary"
            style={{ width: '150px' }}
          >
            play
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Cards;
