import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Breadcrumb, Icon } from "antd";

const Breadcrumbs = props => {
  const { location } = props;
  const breadcrumbNameMap = {
    "/": "Home Page",
    "/recipe": "Recipe Page"
  };
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">
        <Icon type="home" />
        Home
      </Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb style={{ width: 250 }}>{breadcrumbItems}</Breadcrumb>;
};

export default withRouter(Breadcrumbs);
