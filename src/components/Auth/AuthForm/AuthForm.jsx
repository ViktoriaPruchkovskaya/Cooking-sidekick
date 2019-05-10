import React, { Component } from "react";
import { Form, Modal, Input, Icon } from "antd";
import { Link } from "react-router-dom";


class AuthForm extends Component {
  render() {
    const { visible, onCancel, onSubmit, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Authorization"
        okText="Login"
        onCancel={onCancel}
        onOk={onSubmit}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="username"
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
            <p>
              Or <Link to="/registration">register now!</Link>
            </p>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const WrappedAuthForm = Form.create({ name: "authForm" })(AuthForm);

export default WrappedAuthForm;
