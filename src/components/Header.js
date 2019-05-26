import React from "react";
import { withSiteData } from "react-static";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : { className: "header-link" };
};

  // <header className="header">
  //   <h1 className="header-h1">{title}</h1>
  //   <nav className="header-nav">
  //     <Link getProps={isActive} className="header-link" to="/">
  //       Home
  //     </Link>
  //     <Link getProps={isActive} className="header-link" to="/about">
  //       About
  //     </Link>
  //   </nav>
  // </header>



class Header extends React.Component {
  state = {
    darkMode: false,
  }

  componentDidMount() {
    this.getinitialMode();
  }

  getinitialMode() {
    //we get the mode from localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    this.setState({ darkMode: savedMode })
  }

  handletoggle = () => {
    //using previous state to update the toggle
    this.setState((prevMode) => ({ darkMode: !prevMode.darkMode }), () => {
      localStorage.setItem("dark", JSON.stringify(this.state.darkMode));
    })
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container" style={{ marginRight: "40px"}}>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={this.handletoggle}
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