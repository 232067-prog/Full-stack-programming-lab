import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Task 2 Product Dynamic App",
  description: "Product list and dynamic product details routing"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Header />
          <main className="container page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
