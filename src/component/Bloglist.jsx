import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Bloglist(props) {
  const navigate = useNavigate();
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
            <button
              onClick={() => {
                navigate(`/create/${blog.id}`);
              }}
            >
              update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
