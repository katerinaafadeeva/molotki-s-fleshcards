const React = require('react');
const Layout = require('./Layout');

function FormReg() {
  return (
    <Layout>
      <form id="form" method="post" action="/registration">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="phone"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add contact
        </button>
      </form>
    </Layout>
  );
}

module.exports = FormReg;
