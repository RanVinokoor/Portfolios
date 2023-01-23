import React from "react";
import usersService from "../services/usersService";

class SignOut extends React.Component {
  componentDidMount() {
    usersService.logout();
    window.location = "/Portfolios";
  }

  render() {
    return null;
  }
}

export default SignOut;
