import React from "react";
import Markdown from "react-markdown";
import { withRouteData } from "react-static";

export default withRouteData(({ post }) => (
  <article>
    <h1>{post.title}</h1>
    <div style={{ marginBottom: "10px"}}>
      {post.tags.map(tag => (
            <span className="card-tag" key={tag}>
              {tag}
            </span>
          ))}
    </div>
    <div>
        <p style={{ display: "flex" }}>
            <img src="https://icon.now.sh/user/2386ea" />
            <strong>{post.author.name}</strong>
        </p>
    </div>
    <div className="placeholder">
      <img
        alt={post.title}
        src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${
          post.image.handle
        }`}
      />
    </div>
    <Markdown source={post.content} />
  </article>
));
