const React = require('react');
const FormReg = require('./FormReg');
const Layout = require('./Layout');

function Home({ title }) {
  return (
    <Layout title={title}>
      <FormReg />
      <div className="d-flex justify-content-center bg-dark">
        <h1 className="title text-white ">Qiuz</h1>
      </div>
    </Layout>
  );
}
module.exports = Home;
