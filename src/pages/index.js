import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { formatPrice } from "../utils/format";

export const query = graphql`
  {
    allFakeProduct {
      nodes {
        id
        id_original
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
  className="bg-white shadow rounded-lg overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition transform"
>
  <img
    src={p.image}
    alt={p.title}
    className="h-48 w-full object-contain bg-gray-50"
  />
  <div className="p-4 flex flex-col flex-1">
    <h3 className="text-lg font-semibold line-clamp-2">{p.title}</h3>
    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full w-max">
      {p.category}
    </span>
    <p className="text-indigo-600 font-bold mt-3 text-xl">
      {formatPrice(p.price)}
    </p>
    <Link
      to={`/products/${p.id_original}`}
      className="mt-auto inline-block bg-indigo-600 text-white text-center py-2 rounded hover:bg-indigo-700 transition"
    >
      View Details
    </Link>
  </div>
</div>

        ))}
      </div>
    </Layout>
  );
}
