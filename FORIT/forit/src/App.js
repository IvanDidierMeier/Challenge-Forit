import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import SearchInput from './components/SearchInput';
import AddUserForm from './components/AddUserForm';
import './App.css';  // Importar los estilos 

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
      setFilteredUsers(storedUsers);
    } else {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
          setFilteredUsers(response.data);
        });
    }
  }, []);

  const filterUsers = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.address.city.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const addUser = (newUser) => {
    newUser.id = Date.now();
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management System</h1>
      </header>
      <div className="container">
        <SearchInput onSearch={filterUsers} />
        <AddUserForm onAddUser={addUser} />
        <UserList users={filteredUsers} onDeleteUser={deleteUser} />
      </div>
      <footer className="App-footer">
        <p>&copy; 2024 User Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
