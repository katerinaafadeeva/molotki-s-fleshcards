const React = require('react');

function Navbar({ name }) {
  console.log(name);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-dark fs-4"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-4" href="/cards">
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <img
                src="https://www.clipartmax.com/png/middle/265-2653329_angry-beavers-circle-logo-with-transparency-angry-beavers.png"
                className="float-end"
                alt="logo"
                width="80px"
                style={{ marginLeft: '1100px' }}
              />
            </li>
            <h1 style={{ color: 'white' }}> {name}</h1>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;
