import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl m-auto px-5">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;