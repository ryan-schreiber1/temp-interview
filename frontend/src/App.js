import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const API_BASE = 'http://localhost:8000';

  useEffect(() => {
    fetchUsers();
  }, []);

  
  const fetchUsers = async () => {
    const response = await axios.get(`${API_BASE}/users`);
    setUsers(response.data);
  };

  
  const addUser = async (e) => {
    e.preventDefault();
    
    const response = await axios.post(`${API_BASE}/users`, {
      name: name,
      email: email
    });
    
    setUsers([...users, response.data]);
    setName('');
    setEmail('');
  };

  const deleteUser = async (userId) => {
    await axios.delete(`${API_BASE}/users/${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="container">
      <h1 className="header">User Management System</h1>
      
      <form className="user-form" onSubmit={addUser}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Add User</button>
      </form>

      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
            <button 
              className="btn btn-delete"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;