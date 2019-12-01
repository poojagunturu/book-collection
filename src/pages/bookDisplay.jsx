// App.js
import React, { useState, useEffect } from 'react';
import './Login.css';
import axios from 'axios';
import { Wrapper } from './Wrapper';

const BookDisplay = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({items: []});
  const [response, setResponse] = useState('');
  const [post, setPost] = useState('');
  const [responseToPost, setResponseToPost] = useState('');
  
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <section>
      <div className="App">
        <Wrapper/>
      </div>
    </section>
  );
}

export default BookDisplay;