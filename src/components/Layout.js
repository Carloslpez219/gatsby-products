import React from "react";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">Gatsby Products</Link>
          <nav className="text-sm">
            <Link to="/" className="hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-6">{children}</div>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} — Demo
        </div>
      </footer>
    </div>
  );
}
