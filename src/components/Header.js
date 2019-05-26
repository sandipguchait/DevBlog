import React from "react";
import { withSiteData } from "react-static";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : { className: "header-link" };
};

class Header extends React.Component {
  
  render() {
    const { darkMode } = this.props;
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div style={{ fontSize: "30px", fontFamily: "Montserrat", fontWeight:"bold", color: !darkMode ? "black" : "white"}}>
        {this.props.title}
        <span  style={{ paddingLeft: "20px"}}>
          <Link getProps={isActive} style={{ color: !darkMode ? "black" : "white" }} to="/">
            Home
          </Link>
          <Link getProps={isActive} style={{ color: !darkMode ? "black" : "white" }} to="/about">
            About
          </Link>
        </span>
        </div>
        <div className="toggle-container" style={{ marginRight: "40px"}}>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={this.props.handletoggle}
              type="checkbox"
              className="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
    </div>
    );
  }
}

export default withSiteData(Header);