import { Fragment } from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Features />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Home;
