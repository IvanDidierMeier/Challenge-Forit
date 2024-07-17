import React, { useState } from 'react';

function AddUserForm({ onAddUser }) {
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    address: { city: '' },
    phone: '',
    company: { name: '' },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'city') {
      setNewUser(prevState => ({
        ...prevState,
        address: { ...prevState.address, city: value }
      }));
    } else if (name === 'company') {
      setNewUser(prevState => ({
        ...prevState,
        company: { ...prevState.company, name: value }
      }));
    } else {
      setNewUser(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser.name && newUser.username && newUser.email && newUser.address.city && newUser.phone && newUser.company.name) {
      newUser.id = Date.now();
      onAddUser(newUser);
      setNewUser({
        id: '',
        name: '',
        username: '',
        email: '',
        address: { city: '' },
        phone: '',
        company: { name: '' },
      });
      setShowForm(false); // Ocultar el formulario después de añadir el usuario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="add-user-form">
      <button className="add-user-button" onClick={toggleForm}>Agregar Usuario</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            value={newUser.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={newUser.username} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={newUser.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="city" 
            placeholder="Ciudad" 
            value={newUser.address.city} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="phone" 
            placeholder="Teléfono" 
            value={newUser.phone} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="company" 
            placeholder="Empresa" 
            value={newUser.company.name} 
            onChange={handleChange} 
            required 
          />
          <div className="form-row">
            <button className="confirm-button" type="submit">Confirmar Usuario</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddUserForm;