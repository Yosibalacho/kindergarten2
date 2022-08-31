import React    from "react";
import template from "./House.jsx";

class House extends React.Component {
  render() {
    return template.call(this);
  }
}

export default House;
