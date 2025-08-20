const path = require("path");

function slugify(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal && node.internal.type === "InternalProducts") {
    const tail = String(node.id).slice(-6);
    const base = node.title ? slugify(node.title) : `product-${tail}`;
    const slug = `products/${base}-${tail}`;

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("src/templates/product.js");

  const result = await graphql(`
    {
      allInternalProducts {
        nodes {
          id     # Gatsby node id (we'll use this to fetch the node)
          fields { slug }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }

  const items = result.data.allInternalProducts.nodes;
  items.forEach((n) => {
    createPage({
      path: `/${n.fields.slug}`,
      component: productTemplate,
      context: { id: n.id }, 
    });
  });
};
