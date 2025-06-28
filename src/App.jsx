// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import Header from './Header';
import Content from './Content';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <div className="App">
                    <Header />
                    <Content />
                </div>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;