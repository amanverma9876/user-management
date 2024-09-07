

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

 
  const deleteUser = async (id) => {
    try {
    
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      setUsers(users.filter(user => user.id !== id));
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting the user', error);
    }
  };

  return (
    <div className="container">
        
      <Link to="/create">
        <button className="create">Create New User</button>
      </Link>
      <h1>User List</h1>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button className="edit">Edit</button>
                </Link>
                <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
