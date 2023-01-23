import PageHeader from "./common/pageHeader";
import AnimatedPage from "../components/animatedPage";

const About = () => {
  return (
    <AnimatedPage>
      <PageHeader title={<>About</>} />
      <div className="row">
        <div className="col-12">
          <p className="sub-text">
            Designed and developed by <b>Ran Vinokoor</b>.
            Using React, Node.js, Scss and HTML5.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
