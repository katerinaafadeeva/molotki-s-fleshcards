const React = require('react');

function FormReg() {
  return (
    <form id="form" method="post" action="/contacts">
      <div className="mb-3">
        <input type="text" name="name" className="form-control" placeholder="name" />
      </div>
      <div className="mb-3">
        <input type="tel" name="phone" className="form-control" placeholder="phone" />
      </div>
      <div className="mb-3">
        <input type="password" name="password" className="form-control" placeholder="password" />
      </div>
      <button type="submit" className="btn btn-success">Add contact</button>
    </form>
  );
}

module.exports = FormReg;
