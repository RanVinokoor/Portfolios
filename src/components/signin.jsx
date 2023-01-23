import withRouter from "./common/withRouter";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import usersService from "../services/usersService";
import { Navigate } from "react-router-dom";
import AnimatedPage from "../components/animatedPage";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  };

  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await usersService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: { email: response.data },
        });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/portfolios" />;
    }

    return (
      <AnimatedPage>
        <div className="form">
          <PageHeader title="Sign In" />
          <div className="row">
            <div className="col-12">
              <p className="sub-text">Sign in with your account.</p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            {this.renderInput({ name: "email", label: "Email", type: "email" })}
            {this.renderInput({
              name: "password",
              label: "Password",
              type: "password",
            })}
            <div className="my-2">{this.renderButton("Sign In")}</div>
          </form>
        </div>
      </AnimatedPage>
    );
  }
}

export default withRouter(SignIn);
