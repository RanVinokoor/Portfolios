import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/animatedPage";
import PageHeader from "./common/pageHeader";
import axios from "axios";
var cors = "https://corsanywhere.herokuapp.com/";
var Photos = "https://pixabay.com/api/?key=26083619-5d05ea10b83f3319d4f3faa90&q=landscape&image_type=photo&pretty=true";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      
      const response = await axios.get(cors + Photos);
      setPosts(response.data.hits);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <AnimatedPage>
      <div className="top-photos">
        <PageHeader title={<>Top Rated Photos</>} />
        <input
          type="text"
          placeholder="Search Photos..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <div className="photos">
          {loading ? (
            <h4>
              <b>Loading...</b>
            </h4>
          ) : (
            posts
              // eslint-disable-next-line
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.tags.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item) => (
                <div key={item.id} className="card my-4">
                  <img
                    src={item.webformatURL}
                    className="card-img-top"
                    alt="profile"
                  />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      By <b>{item.user}</b>
                    </li>
                    <li className="list-group-item">{item.tags}</li>
                  </ul>
                </div>
              ))
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default App;
