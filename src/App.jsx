import { useState } from "react";
import "./App.css";
import HomeRoute from "./Components/HomeRoute";
import NavBar from "./Components/Partials/_NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <HomeRoute />
      </div>
    </>
  );
}

export default App;
