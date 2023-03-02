const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <div className="d-flex justify-content-center">
        <h1 className="title">Крутые бобры</h1>
        <img src="https://irecommend.ru/sites/default/files/product-images/2195368/BxfzcB8GIo582Ah9xD5eQ.jpeg" />
      </div>
    </Layout>
  );
};
