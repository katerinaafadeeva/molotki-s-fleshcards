const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children, name }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <body className="bg-dark">
        <Navbar name={name} />
        {children}
      </body>
    </html>
  );
};
