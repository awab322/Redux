import React from "react";
import './App.css';
import EnterData from "./components/EnterData";
import ShowData from "./components/ShowData";

function App() {
  return (
    <>
    <div className="container">
      <div className="App">
        <ShowData />
        <EnterData />

      </div>
    </div>
    </>
  );
}

export default App;
