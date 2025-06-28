// src/Content.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import UserList from './UserList';

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#f9f9f9' : '#555', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <p>This is the content area.</p>
            <UserList />
        </div>
    );
};

export default Content;