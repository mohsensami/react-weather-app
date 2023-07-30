import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState<string>("");
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
        />
        <input disabled={!city} type="submit" value="Send" />
      </form>
    </>
  );
}

export default App;
