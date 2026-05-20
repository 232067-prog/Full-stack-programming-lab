import "./globals.css";

export const metadata = {
  title: "Ecommerce Lab",
  description: "Basic ecommerce app for Lab 11"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Lab 11
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Ecommerce Products
            </h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
