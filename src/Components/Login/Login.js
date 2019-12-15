import React, { Component } from 'react';
import '../Login/Login.css';
import airplane from '../Assets/airplane.svg';
import adminLogo from '../Assets/adminLogo.png';
import { Form, Input, FormGroup, FormFeedback, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { setUserData } from '../Store/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      username: "",
      password: ""
    },
    errors: {}
  });

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ""
      }
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.username !== "tpconnects")
      errors.username = "Please enter valid username.";

    if (data.password !== "123")
      errors.password = "Please enter valid password.";

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      console.log(data);
      this.props.dispatch(setUserData(data));
      this.props.history.push("/sidemenu");
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <div className="split left">
          <div>
            <img src={airplane} alt="Airplane" />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <img src={adminLogo} alt="logo" />
            <br />
            <br />
            <h5>Sign In</h5>

            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  id="username"
                  value={data.username}
                  invalid={errors.username ? true : false}
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Username"
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Input
                  id="password"
                  value={data.password}
                  type="password"
                  name="password"
                  invalid={errors.password ? true : false}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <p>
                <a href="/">Forgot Password?</a>
              </p>
              <Button
                className="btn btn-danger"
                style={{ backgroundColor: "#cc0c00" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Login);
