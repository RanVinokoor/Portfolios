import React from "react";
import withRouter from "./common/withRouter";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import Form from "./common/form";
import cardService from "../services/cardsService";
import { toast } from "react-toastify";
import AnimatedPage from "../components/animatedPage";

class EditCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizDate: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizDate: Joi.string().min(2).max(400).required(),
    bizImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  async componentDidMount() {
    const cardId = this.props.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }

  mapToViewModel(card) {
    return {
      _id: card._id,
      bizName: card.bizName,
      bizDescription: card.bizDescription,
      bizAddress: card.bizAddress,
      bizDate: card.bizDate,
      bizImage: card.bizImage,
    };
  }

  doSubmit = async () => {
    const { form } = this.state;
    await cardService.editCard(form);
    toast("Card Updated");
    this.props.navigate("/my-portfolio");
  };

  handleCancel = () => {
    this.props.navigate("/my-portfolio");
  };

  render() {
    return (
      <AnimatedPage>
        <div className="container">
          <div className="form">
            <PageHeader title="Edit Photo" />
            <div className="row">
              <div className="col-12">
                <p className="sub-text">Edit photo details.</p>
              </div>
            </div>
            <div className="row">
              <div>
                <form
                  onSubmit={this.handleSubmit}
                  autoComplete="off"
                  method="POST"
                >
                  {this.renderInput({ name: "bizName", label: "Name" })}
                  {this.renderInput({
                    name: "bizDescription",
                    label: "Description",
                  })}
                  {this.renderInput({ name: "bizAddress", label: "Address" })}
                  {this.renderInput({ name: "bizDate", label: "Date" })}
                  {this.renderInput({ name: "bizImage", label: "Image" })}
                  {this.renderButton("Update Card")}
                  <button
                    className="btn btn-primary"
                    onClick={this.handleCancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    );
  }
}

export default withRouter(EditCard);
