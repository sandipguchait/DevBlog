import React from "react";
import { Root, Routes } from "react-static";
import Post from './pages/post';
import Home from './pages/index';
import About from './pages/about';
import Header from "./components/Header";
import "./app.css";

export const UserContext = React.createContext();

class App extends React.Component {
  state = {
    darkMode: false
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

  render(){
    const { darkMode } = this.state;

    return (
      <UserContext.Provider value={{ darkMode }}>
        <div style={{ backgroundColor: darkMode ? "#282c35" : "" }}>
          <Header handletoggle={this.handletoggle} darkMode={this.state.darkMode}/>
          <content>
            <Routes darkMode={this.state.darkMode}/>
          </content>
        </div>
      </UserContext.Provider>
    );
}
}

export default App;
