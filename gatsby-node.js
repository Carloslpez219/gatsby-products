const fetch = require("node-fetch");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  products.forEach((p) => {
    createNode({
      ...p,
      id: createNodeId(`fakeproduct-${p.id}`),
      parent: null,
      children: [],
      internal: {
        type: "FakeProduct",
        contentDigest: createContentDigest(p),
      },
    });
  });
};
