import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import "./Registration.css";

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 4
        },
        sm: {
          span: 16,
          offset: 10
        }
      }
    };
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <div className="background-image" />
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label={<span>Login</span>}>
            {getFieldDecorator("login", {
              rules: [
                {
                  required: true,
                  message: "Please input your login!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ width: 230 }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
