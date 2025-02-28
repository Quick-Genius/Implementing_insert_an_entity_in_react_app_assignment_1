// src/pages/AddBook.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addBooks.css"

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", description: "", coverImage: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Added:", book);
    navigate("/");
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" value={book.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author Name" value={book.author} onChange={handleChange} required />
        <textarea name="description" placeholder="Book Description" value={book.description} onChange={handleChange} required />
        <input type="url" name="coverImage" placeholder="Cover Image URL" value={book.coverImage} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
