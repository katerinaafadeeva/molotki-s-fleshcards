const React = require('react');
function Layout({ title, children }) {
  <html lang="en">
    <head>
      <title>{title}</title>
    </head>
    <body>{children}</body>
  </html>;
}

module.exports = Layout;
