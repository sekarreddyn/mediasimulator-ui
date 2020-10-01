import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../actions";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Icon, Input, Button, Row, Col, Card } from "antd";

import "../App.css";
import logo from "../assets/login-logo.png";
import analyticedge from "../assets/analyticedge-logo.png";

class Login extends Component {
  componentDidMount() {
    document.body.classList.add("login");
    return () => {
      document.body.classList.remove("login");
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(authActions.login(values));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.props.auth;

    return (
      <div style={{ backgroundImage: "url('./assets/login-bg.jpg')" }}>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ width: "100%", height: "100vh" }}
        >
          <Card style={{ maxWidth: 450 }}>
            <Col span={24}>
              <img
                alt="Media Simulator"
                src={logo}
                className="login-logo mb-4 mx-auto"
                style={{
                  textAlign: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              />
              <h3 className="text-center text-primary mb-3">
                Login with your user credentials to access media simulator
              </h3>

              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item className="mb-3" label="Email Address">
                  {getFieldDecorator("emailOrMobile", {
                    rules: [
                      { required: true, message: "Please enter your email " },
                    ],
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="email"
                      size="large"
                    />
                  )}
                </Form.Item>
                <Form.Item className="mb-0" label="Password">
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please enter your password",
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
                  })(
                    <Input.Password
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                      size="large"
                    />
                  )}
                </Form.Item>
                <p className="text-right text-dark mb-5">
                  <NavLink to="/forgot-password">Forgot Password</NavLink>
                </p>
                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                    size="large"
                  >
                    Log in
                  </Button>
                  <p className="info-text text-center mb-4">
                    Don’t have login access?{" "}
                    <NavLink className="font-weight-bold" to="/request-access">
                      Request Access
                    </NavLink>
                  </p>
                </Form.Item>
                <p className="poweredby mb-0 text-center">
                  Powered By <img src={analyticedge} alt="" />{" "}
                </p>
              </Form>
            </Col>
          </Card>
        </Row>
      </div>
    );
  }
}

const WrappedLogin = Form.create({ name: "normal_login" })(Login);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(WrappedLogin);
