import React from 'react';

function UserCard({ user, onDeleteUser }) {
  const handleDeleteClick = () => {
    onDeleteUser(user.id);
  };

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Ciudad: {user.address.city}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Empresa: {user.company.name}</p>
      <button className="delete-button" onClick={handleDeleteClick}>Eliminar</button> {/* Nuevo botón */}
    </div>
  );
}

export default UserCard;
