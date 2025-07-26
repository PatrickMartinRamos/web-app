// pages/DashboardPage.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const DashboardPage = () => {
  const { currentUser, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ first_name: "", last_name: "", email: "", avatar: "" });
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users?per_page=12", {
          headers: {
            "x-api-key": "reqres-free-v1"
          }
        });
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    if (newUser.first_name && newUser.last_name && newUser.email) {
      const id = Date.now();
      setUsers([
        ...users,
        { id, ...newUser, avatar: newUser.avatar || "https://via.placeholder.com/100" }
      ]);
      setNewUser({ first_name: "", last_name: "", email: "", avatar: "" });
    }
  };

  const handleEditUser = (id) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      setNewUser({ ...user });
      setEditingUserId(id);
    }
  };

  const handleSaveEdit = () => {
    setUsers(users.map((u) => (u.id === editingUserId ? { ...u, ...newUser } : u)));
    setNewUser({ first_name: "", last_name: "", email: "", avatar: "" });
    setEditingUserId(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {currentUser?.first_name || "User"}</h1>
      <button onClick={logout}>Logout</button>

      <h2>{editingUserId ? "Edit User" : "Add New User"}</h2>
      <input
        type="text"
        placeholder="First Name"
        value={newUser.first_name}
        onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newUser.last_name}
        onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Avatar URL (optional)"
        value={newUser.avatar}
        onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
      />
      <button onClick={editingUserId ? handleSaveEdit : handleAddUser}>
        {editingUserId ? "Save" : "Add"}
      </button>

      <h2>User List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {users.map((user) => (
          <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img src={user.avatar} alt={user.first_name} width={100} height={100} />
            <p><strong>{user.first_name} {user.last_name}</strong></p>
            <p>{user.email}</p>
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
