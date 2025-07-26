import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password123");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users?per_page=12", {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        });
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password, users);
    if (!success) {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginPage;
