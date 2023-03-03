const React = require('react');

function CardReg({ contact }) {
  return <h1 className="list-group-item">Привет {contact.name}</h1>;
}

module.exports = CardReg;
