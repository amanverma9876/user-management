
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      await axios.post('https://jsonplaceholder.typicode.com/users', user);
      alert('User created successfully!');
      navigate('/'); 
    } catch (error) {
      console.error('Error creating the user', error);
    }
  };

  return (
    <div className="container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
