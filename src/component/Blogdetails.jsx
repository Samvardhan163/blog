import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
export default function Blogdetails() {
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  function handleClick() {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
        </article>
      )}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
