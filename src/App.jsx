import React from "react";
import "./styles/general.scss";
import "./styles/forms.scss";
import "./styles/buttons.scss";
import "./styles/navbar.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signin";
import LogOut from "./components/logout";
import SignUp from "./components/signup";
import CreateCard from "./components/createCard";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usersService from "./services/usersService";
import ProtectedRoute from "./components/common/protectedRoute";
import MyPortfolio from "./components/myPortfolio";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";
import Photos from "./components/photos";

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: usersService.getUser(),
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="app d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>

        <main className="container flex-fill">
          <Routes>
            <Route
              path="/my-portfolio/edit/:id"
              element={<EditCard />}
              biz={true}
            />
            <Route
              path="/my-portfolio/delete/:id"
              element={<DeleteCard />}
              biz={true}
            />
            <Route path="/my-portfolio" element={<MyPortfolio />} biz={true} />
            <Route path="/photos" element={<Photos />} />
            <Route
              path="/create-card"
              element={
                <ProtectedRoute bizOnly>
                  <CreateCard />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolios" element={<Home user={user} />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
