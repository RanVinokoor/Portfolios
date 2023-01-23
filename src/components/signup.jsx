import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import Joi from "joi";
import withRouter from "./common/withRouter";
import usersService from "../services/usersService";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import AnimatedPage from "../components/animatedPage";

class SignUp extends Form {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };

    try {
      await usersService.createUser(body);
      toast("You are now registered");
      await usersService.login(form.email, form.password);
      window.location = "/create-card";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }

    return (
      <AnimatedPage>
        <div className="form">
          <PageHeader title="Sign Up" />
          <div className="row">
            <div className="col-12">
              <p className="sub-text">
                Open an account, It's free.
              </p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            {this.renderInput({ name: "name", label: "Name" })}
            {this.renderInput({ name: "email", label: "Email", type: "email" })}
            {this.renderInput({
              name: "password",
              label: "Password",
              type: "password",
            })}
            <div className="my-2">{this.renderButton("Sign Up")}</div>
          </form>
        </div>
      </AnimatedPage>
    );
  }
}

export default withRouter(SignUp);
