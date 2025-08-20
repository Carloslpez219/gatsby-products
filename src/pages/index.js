import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gatsby Products</h1>
          <span className="text-sm text-gray-600">Smoke test</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Sample grid</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border overflow-hidden">
            <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center">
              <StaticImage
                src="../images/icon.png"
                alt="placeholder"
                placeholder="blurred"
                width={600}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold line-clamp-1">Sample product</h3>
              <p className="mt-1 text-gray-700 font-medium">$19.99</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const Head = () => <title>Home</title>;
