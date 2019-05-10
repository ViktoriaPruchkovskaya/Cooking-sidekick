import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import WrappedAuthForm from "./AuthForm/AuthForm";
import { request } from "http";

class AuthBtn extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.props.history.push("/");
  };

  handleSubmit = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      } else {
        fetch("/api/login", {
          credentials: "include",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: form
        });
      }
      console.log(request.body);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Favorites
        </Button>
        <WrappedAuthForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleSubmit}
          onClick={this.showModal}
        />
      </div>
    );
  }
}

export default withRouter(AuthBtn);
