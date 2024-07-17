import React from 'react';
import UserCard from './UserCard';

function UserList({ users, onDeleteUser }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </div>
  );
}

export default UserList;
