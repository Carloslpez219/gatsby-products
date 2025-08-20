import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { formatPrice } from "../utils/format";

export const query = graphql`
  {
    allFakeProduct {
      nodes {
        id
        title
        price
        description
        category
        image
      }
    }
  }
`;

export default function IndexPage({ data }) {
  const products = data.allFakeProduct.nodes;

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-contain bg-gray-50"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-indigo-600 font-bold mt-2">
                {formatPrice(p.price)}
              </p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {p.description}
              </p>
              <span className="text-xs text-gray-500 mt-auto">
                Category: {p.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
