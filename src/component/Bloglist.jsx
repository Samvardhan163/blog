import React from "react";
import { Link } from "react-router-dom";
export default function Bloglist(props) {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      <div className="card">
        {props.blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
