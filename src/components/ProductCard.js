import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { formatPrice } from "../utils/format";

export default function ProductCard({ product }) {
  const image = product?.localImage ? getImage(product.localImage) : null;

  return (
    <article className="rounded-lg border overflow-hidden hover:shadow transition">
      <Link to={`/${product.fields.slug}`} className="block">
        <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center">
          {image ? (
            <GatsbyImage image={image} alt={product.title} className="w-full h-full" />
          ) : product?.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">No image</span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{product.title}</h3>
          <p className="mt-1 text-gray-700 font-medium">{formatPrice(product.price)}</p>
          <p className="mt-2 text-xs text-gray-500 capitalize">{product.category}</p>
        </div>
      </Link>
    </article>
  );
}
