const fetch = require("node-fetch");
const path = require("path");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  products.forEach((p) => {
  createNode({
    ...p,
    id_original: p.id,
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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("./src/templates/product.js");

  const result = await graphql(`
    {
      allFakeProduct {
        nodes {
          id
          productId: id_original
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading products", result.errors);
    return;
  }

  const products = result.data.allFakeProduct.nodes;

  products.forEach((p) => {
    createPage({
      path: `/products/${p.productId}`,
      component: productTemplate,
      context: {
        productId: p.productId,
      },
    });
  });
};
