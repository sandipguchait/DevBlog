import React, { Component } from 'react';
import Markdown from "react-markdown";
import { withRouteData } from "react-static";
import { UserContext } from '../App';
//1a1919
class Post extends Component {
  state = {
    darkMode: false
  }

  componentDidMount() {
    //we get the mode from localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    this.setState({ darkMode: savedMode })
  }

  render() {

    return (
      <UserContext.Consumer>
        {({ darkMode }) => <React.Fragment>
      <article style={{ color: darkMode ? "#282c35" : ""}}>
        <h1 style={{ color: darkMode ? "white" :"" }}>{this.props.post.title}</h1>
        <div style={{ color: darkMode ? "white": "", marginTop: "10px"}}>
          {this.props.post.tags.map(tag => (
                <span style={{ marginRight: "10px"}}key={tag} >
                  #{tag}
                </span>
              ))}
          </div>
        <div>
            <p style={{ display: "flex", color: darkMode ? "white" : "" }}>
                <img src="https://icon.now.sh/user/2386ea" />
                <strong>{this.props.post.author.name}</strong>
            </p>
        </div>
        <div className="placeholder" style={{ color: darkMode ? "white" : ""}}>
          <img
            alt={this.props.post.title}
            src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${
              this.props.post.image.handle
            }`}
          />
        </div>
        <Markdown source={this.props.post.content} style={{ color: darkMode ? "white" : ""}} />
      </article>
      </React.Fragment >}
      </UserContext.Consumer>
    );
  }
}

export default withRouteData(Post);
