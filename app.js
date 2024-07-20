import LoginForm from './LoginForm';
// App.js
import React from 'react';
import LoginForm from './LoginForm';  // Correct import path

const App = () => {
  const handleLogin = (username, password) => {
    // Handle login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <LoginForm handleLogin={handleLogin} />
      </header>
    </div>
  );
};

export default App;
