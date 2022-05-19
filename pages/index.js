import Layout from "../components/Layout/Layout";
import Intro from "../components/Home/Intro";
import Experience from "../components/Home/Experience";
import Journey from "../components/Home/Journey";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <Layout>
      <Intro/>
      <Experience/>
      <Journey/>
      <Contact/>
    </Layout>
  )
}

export default Home;
