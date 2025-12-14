import React from "react";

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Library Management System</h1>

      <p>
        This Library Management System is a MERN stack project built using
        React, Node.js, Express, and MongoDB.
      </p>

      <p>
        The goal of this project is to manage books, users, and borrowing
        records efficiently with a simple and user-friendly interface.
      </p>

      <p>
        Features include:
      </p>

      <ul>
        <li>Add, update, and delete books</li>
        <li>User authentication</li>
        <li>Borrow and return books</li>
        <li>Admin dashboard</li>
      </ul>

      <p>
        Developed by <strong>Soumik Seth</strong>.
      </p>
    </div>
  );
}

export default About;
