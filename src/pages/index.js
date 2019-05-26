import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";

export default withRouteData(({ posts }) => (
  <div className="container">
    {posts.map(post => (
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
          <h3 style={{ margin: 0 }}>{post.title}</h3>
          <p style={{ display: "flex" }}>
            <img src="https://icon.now.sh/face/2386ea" />
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
));
