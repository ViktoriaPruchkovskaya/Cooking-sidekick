import React, { Component } from "react";
import { Icon, Upload } from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
class RecipePic extends Component {
  state = {
    loading: false
  };

  statusHandleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        //beforeUpload={beforeUpload}
        onChange={this.statusHandleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
}

export default RecipePic;