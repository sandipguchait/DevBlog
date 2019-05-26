import React, { Component } from 'react';
import { withRouteData } from "react-static";
import { Link } from "@reach/router";
import { UserContext } from '../App';

class Home extends Component {

  render() {

    return (
      <UserContext.Consumer>
        {({ darkMode }) => <React.Fragment>
      <div className="container" style={{ backgroundColor: darkMode ? "#282c35" : ''}}>
        {this.props.posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className="card">
            <div style={{ paddingRight: "1em" }}>
              <img
                alt={post.title}
                className="card-img"
                src={`https://media.graphcms.com/resize=w:170,h:150,fit:crop/${
                  post.image.handle
                }`}
              />
            </div>
            <div>
              <h3 style={{ margin: 0, color: darkMode ? "white" : "#282c35" }}>{post.title}</h3>
              <p style={{ display: "flex", color: darkMode ? "white" : "#282c35"  }}>
                <img src={`https://icon.now.sh/face/${ darkMode ? 'ffffff' : '282c35'}`}  style={{ marginRight: "5px"}}/>
                {post.author.name}
              </p>
              {post.tags.map(tag => (
                <span className="card-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      </React.Fragment>}
      </UserContext.Consumer>
    );
  }
}

export default withRouteData(Home);
