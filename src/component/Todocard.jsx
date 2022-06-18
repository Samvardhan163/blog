/* eslint-disable react/style-prop-object */
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Card } from "react-bootstrap";

export default function Todocard(props) {
  // const styles = (todolist) => {
  //   return {
  //     backgroundColor: todolist.priority ? "#ffcccb" : "blue",
  //   };
  // };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {props.todo.map((todolist) => (
          <>
            <Card
              style={{
                backgroundColor: todolist.priority ? "#ffcccb" : "blue",
                margin: "10px",
                height: "200px",
                width: "200px",
              }}
            >
              <Card.Body>
                <Card.Title
                  className="d-flex justify-content-between align-items-baseline fw-normal mb-3 "
                  key={todolist.id}
                ></Card.Title>
                <div className="me-2">{todolist.descripition}</div>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
