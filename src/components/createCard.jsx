import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import Form from "./common/form";
import cardService from "../services/cardsService";
import { toast } from "react-toastify";
import AnimatedPage from "../components/animatedPage";
// import ImageUploader from 'react-images-upload';

class CreateCard extends Form {
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
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizDate: Joi.string().min(2).max(400).required().label("Date"),
    bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
  };

  async doSubmit() {
    const {
      form: { bizImage, ...body },
    } = this.state;

    if (bizImage) {
      body.bizImage = bizImage;
    }

    try {
      await cardService.createCard(body);
      toast("A new card is opened");

      const interval = setInterval(() => {
        window.location = "/my-portfolio";
      }, 2000);
      return () => clearInterval(interval);
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <AnimatedPage>
        <div className="container">
          <div className="form">
            <PageHeader title="Add Photo" />
            <div className="row">
              <div className="col-12">
                <p className="sub-text">Insert photo details.</p>
              </div>
            </div>
            <form
              onSubmit={this.handleSubmit}
              noValidate="novalidate"
              autoComplete="off"
            >
              {this.renderInput({ name: "bizName", label: "Name" })}
              {this.renderInput({
                name: "bizDescription",
                label: "Description",
              })}
              {this.renderInput({ name: "bizAddress", label: "Location" })}
              {this.renderInput({ name: "bizDate", label: "Date Taken" })}
              {this.renderInput({ name: "bizImage", label: "Image" })}
              {/* <ImageUploader 
          withIcon={false} 
          buttonText="Upload Image"
          onChange={this.onDrop}
          /> */}
              <div className="mt-2">{this.renderButton("Confirm")}</div>
            </form>
          </div>
        </div>
      </AnimatedPage>
    );
  }
}

export default CreateCard;
