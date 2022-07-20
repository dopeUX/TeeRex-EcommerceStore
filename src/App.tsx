import React from "react";
import logo from "./logo.svg";
import "./styles/main.css";
import HomePage from "./components/HomePage/HomePage";
import GlobalStateProvider from "./reducers/globalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <HomePage />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
