import React from "react";
import withRouter from "./common/withRouter";
import cardService from "../services/cardsService";
import { toast } from "react-toastify";

class DeleteCard extends React.Component {
    async componentDidMount() {
    const cardId = this.props.params.id;
    await cardService.deleteCard(cardId);
    toast("Card Deleted");
    this.props.navigate("/my-portfolio");
  }

  render() {
    return null;
  }
}

export default withRouter(DeleteCard);
