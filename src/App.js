import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/UserForm';
import EditUser from './components/EditUser';
import './components/UserManagement.css'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
