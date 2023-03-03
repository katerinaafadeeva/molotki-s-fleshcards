const React = require('react');
const Layout = require('./Layout');

function Game({ questionText, answer, theme, questionId }) {
  return (
    <Layout>
      <div className="card-body">
        <p
          className="card-text text-white"
          style={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            marginLeft: '40px',
            marginTop: '50px',
          }}
        >
          {questionText}
        </p>
        <div
          className="input-group"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >

          <input
            id="answerInput"
            type="text"
            className="form-control"
            placeholder="ответик"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
            style={{
              width: '400px',
              height: '80px',
              fontSize: '30px',
              borderRadius: '10px',
            }}
          />

          <button
            type="button"
            className="bg-danger"
            id="answerButton"
            data-theme={theme}
            data-questionId={questionId}
            style={{
              marginTop: '20px',
              borderRadius: '10px',
              height: '50px',
              fontSize: '25px',
            }}
          >
            ответить
          </button>
        </div>
      </div>
      <div />
    </Layout>
  );
}

module.exports = Game;
