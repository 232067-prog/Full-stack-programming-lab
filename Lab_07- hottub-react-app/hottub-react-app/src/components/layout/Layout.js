import TopBar from "./TopBar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <main className="main-wrapper">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
