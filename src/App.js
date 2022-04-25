import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";

// data();

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <h1 className="nav">List of users(Fetch API)</h1>

      <div className="container">
        {data &&
          data.map((user) => {
            console.log(user.catchPhrase);
            return <UserList user={user} key={user.id} />;
          })}
      </div>
    </>
  );
};

export default App;
