import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux"; //redux ile bağlantı kurmak için connect gerekli.

class examplePage extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div>
        <h2>Çalışıyor... </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(examplePage);
