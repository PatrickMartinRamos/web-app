// components/UserForm.jsx
import { useState, useEffect } from "react";

const UserForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(`${initialData.first_name} ${initialData.last_name}`);
      setEmail(initialData.email);
      setAvatar(initialData.avatar || "");
    } else {
      setName("");
      setEmail("");
      setAvatar("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [first_name, last_name = ""] = name.split(" ");
    onSubmit({ id: initialData?.id || null, first_name, last_name, email, avatar });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{initialData ? "Edit User" : "Add User"}</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar URL (optional)" />
      <button type="submit">{initialData ? "Update" : "Add"}</button>
    </form>
  );
};

export default UserForm;
