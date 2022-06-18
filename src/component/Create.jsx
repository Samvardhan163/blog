import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  function operation(id) {
    if (id > 0) {
      return "Update";
    } else {
      return "Add blog";
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    if (id == null) {
      console.log("add");
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(
        () => console.log("new blog added"),
        setIsPending(false),
        navigate("/")
      );
    } else {
      fetch("http://localhost:8000/blogs/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(
        () => console.log("updated blog added"),
        setIsPending(false),
        navigate("/")
      );
    }
  }
  const {
    data: blogs,
    isPendings,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  useEffect(() => {
    if (blogs) {
      setTitle(blogs.title);
      setAuthor(blogs.author);
      setBody(blogs.body);
    }
  }, [blogs]);

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>{operation(id)}</button>}
        {isPending && <button disabled>Add Blog</button>}
      </form>
    </div>
  );
}
