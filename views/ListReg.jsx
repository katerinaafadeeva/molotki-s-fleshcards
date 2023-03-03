const React = require('react');
const CardReg = require('./CardReg');

function List({ arrContacts }) {
  return (
    <ul id="list" className="list-group mt-3">
      {arrContacts.length ? (
        arrContacts.map((contactEl) => <CardReg contact={contactEl} />)
      ) : (
        <li className="list-group-item">No data</li>
      )}
    </ul>
  );
}

module.exports = List;
