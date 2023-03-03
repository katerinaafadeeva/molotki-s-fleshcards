const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <div className="d-flex justify-content-center bg-dark">
        <h1 className="title text-white ">Qiuz</h1>
      </div>
    </Layout>
  );
};
