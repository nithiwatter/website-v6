import Layout from "../components/Layout/Layout";
import Intro from "../components/Home/Intro";

const Home = () => {
  return (
    <Layout>
      <div style={{ height: "160vh", }}>
        <Intro/>
      </div>
    </Layout>
  )
}

export default Home;
