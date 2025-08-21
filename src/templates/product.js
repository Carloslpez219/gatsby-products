import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { formatPrice } from "../utils/format";

export const query = graphql`
  query ProductById($productId: Int!) {
    fakeProduct(id_original: { eq: $productId }) {
      id_original
      title
      price
      description
      category
      image
    }
  }
`;

export default function ProductTemplate({ data }) {
  const p = data.fakeProduct;

  return (
    <Layout>
      <article className="grid gap-8 md:grid-cols-2">
        <div className="bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-contain max-h-[500px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <p className="mt-2 text-2xl font-semibold text-indigo-600">
            {formatPrice(p.price)}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {p.description || "No description."}
          </p>
          <p className="mt-4 text-sm text-gray-500 capitalize">
            Category: {p.category}
          </p>
        </div>
      </article>
    </Layout>
  );
}

export const Head = ({ data }) => (
  <title>{data?.fakeProduct?.title ?? "Product"}</title>
);
