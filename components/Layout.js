import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl m-auto py-10 px-5">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;