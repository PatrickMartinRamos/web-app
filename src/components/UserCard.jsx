// components/UserCard.jsx
const UserCard = ({ user, onDelete, onEdit }) => (
  <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
    <img src={user.avatar} alt={user.first_name} width="50" />
    <h4>{user.first_name} {user.last_name}</h4>
    <p>{user.email}</p>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default UserCard;
