import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import axios from "axios";
import "./App.css";
import {} from "react-router-dom";

function App() {
  const handleSubmit = async () => {
    try {
      const response = await axios.get("http://localhost:4000/");
      const data = response.data;
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log("Error response :" + error.response);
      }
      console.log("error :" + error);
    }
  };
  return (
    <>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default App;
