import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardsService";
import Card from "./card";
import AnimatedPage from "./animatedPage";
import { NavLink } from "react-router-dom";

class MyPortfolio extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyPortfolio();
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    const { cards } = this.state;

    return (
      <AnimatedPage>
        <div className="container">
          <div className="add-photo-container">
            <PageHeader title="My Portfolio" />
              <NavLink to="/create-card" className="add-photo-btn btn btn-primary">
                Add New Photo
              </NavLink>
          </div>
          <div className="row">
            {cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)}
          </div>
        </div>
      </AnimatedPage>
    );
  }
}

export default MyPortfolio;
