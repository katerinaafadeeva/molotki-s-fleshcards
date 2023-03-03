const React = require('react');
const Layout = require('./Layout');

function Game({ question, answer, theme, questionId }) {
  return (
    <Layout>
      <div
        className="card-body"
        style={{ maxWidth: '300px', border: '2px solid black' }}
      >
        <p className="card-text text-white">{JSON.stringify(question)}</p>
        <div className="input-group">
          <div className="input-group-text" id="btnGroupAddon2">
            @
          </div>
          <input
            id="answerInput"
            type="text"
            className="form-control"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
          <button
            type="button"
            className=""
            id="answerButton"
            data-theme={theme}
            data-questionId={questionId}
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
