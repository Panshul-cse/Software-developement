import React from "react";

function UserProfile({ username }) {
  return <p>Welcome, {username}!</p>;
}
function Icon({ username }) {
  return (
    <div>
      <span>👤</span>
      <UserProfile username={username} />
    </div>
  );
}
function Header({ username }) {
  return (
    <header>
      <h1>My App</h1>
      <Icon username={username} />
    </header>
  );
}
function App() {
  const username = "Panshul";
  return (
    <div>
      <Header username={username} />
    </div>
  );
}
export default App;

