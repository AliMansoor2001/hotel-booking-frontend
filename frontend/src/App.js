import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/searchResults';
import BookRoom from './pages/BookRoom';
import Dashboard from './pages/Dashboard'; // implement listing of bookings
import SignupForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<SearchResults/>} />
        <Route path="/book/:id" element={<BookRoom/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path='/login' element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

