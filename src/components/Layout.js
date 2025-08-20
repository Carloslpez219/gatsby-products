import * as React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4">
        <h1 className="text-2xl font-bold">Fake Products Store</h1>
      </header>
      <main className="p-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
