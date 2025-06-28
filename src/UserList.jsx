// src/UserList.js
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated){
            // Fetch data from the API
            fetch('https://reqres.in/api/users', {
                method: "GET",
                withCredentials: true,
                headers: {
                    "x-api-key" : " reqres-free-v1"
                }   
            })
                .then(response => response.json())
                .then(data => {
                    setUsers(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }else{
            setUsers([]);
        }
        // console.log(isAuthenticated)
        // console.log(count)
    }, [isAuthenticated]); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User List</h1>
            <button onClick={() => setCount(count+1)}>
                Count {count}
            </button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        <p>{user.first_name} {user.last_name}</p>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;