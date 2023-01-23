import PageHeader from "./common/pageHeader";
import AnimatedPage from "../components/animatedPage";
import VideoPlayer from "react-background-video-player";
import { NavLink } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <AnimatedPage>
      <PageHeader
        title={
          <>
            <p className="text-large">Portfolios</p>
          </>
        }
      />
      <div className="row">
        <div className="col-12">
          <p className="home-paragraph">
            Create your creative portfolio. <br />
            Discover others.
          </p>
          <div className="home-btn-wrapper">
            {user ? (
              <NavLink
                to="/my-portfolio"
                className="portfolio-btn btn btn-primary"
              >
                My Portfolio
              </NavLink>
            ) : (
              <NavLink to="/signup" className="portfolio-btn btn btn-primary">
                Join Us
              </NavLink>
            )}
            <NavLink to="/photos" className="photos-btn btn btn-primary">
              Top Rated Photos
            </NavLink>
          </div>
          {!user?.biz && (
            <NavLink to="/signin" className="signin-btn">
              Already have an account? <b>Login here!</b>
            </NavLink>
          )}
        </div>
      </div>
      <VideoPlayer
        className="video"
        src={
          "https://assets.mixkit.co/videos/preview/mixkit-photographer-shooting-from-the-top-of-a-mountain-21281-large.mp4"
        }
        autoPlay={true}
        muted={true}
      />
    </AnimatedPage>
  );
};

export default Home;
