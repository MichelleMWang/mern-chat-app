import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
      const response = await axios.get('/api/user/applications');
      console.log("users", response.data)
      setUsers(response.data);
    fetchUsers();
  } catch (error) {
    console.log("ha"); 
    console.error(error); 
  }
  } }, []);

  return (
    <div>
      <h2>Tutor Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationComponent;
