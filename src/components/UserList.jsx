// components/UserList.jsx
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import { useState } from "react";

const UserList = ({ usersRef, setRefresh }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (id) => {
    usersRef.current = usersRef.current.filter((user) => user.id !== id);
    setRefresh((prev) => !prev);
  };

  const handleAdd = (user) => {
    usersRef.current.push({ ...user, id: Date.now() });
    setRefresh((prev) => !prev);
  };

  const handleEdit = (updatedUser) => {
    usersRef.current = usersRef.current.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setSelectedUser(null);
    setRefresh((prev) => !prev);
  };

  return (
    <div>
      <UserForm onSubmit={selectedUser ? handleEdit : handleAdd} initialData={selectedUser} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {usersRef.current.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={() => handleDelete(user.id)}
            onEdit={() => setSelectedUser(user)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
