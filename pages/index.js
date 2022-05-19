import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Intro from "../components/Home/Intro";
import Experience from "../components/Home/Experience";
import Journey from "../components/Home/Journey";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Calix Huang • @calixo888</title>
        <meta name="description" content="Hey, I'm Calix. I love software and storytelling. I'm an incoming freshman at the USC Iovine and Young Academy. Learn more about me here :)" />
      </Head>
      <Intro/>
      <Experience/>
      <Journey/>
      <Contact/>
    </Layout>
  )
}

export default Home;
