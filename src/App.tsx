import React from "react";
import logo from "./logo.svg";
import "./styles/main.css";
import HomePage from "./components/HomePage/HomePage";
import GlobalStateProvider from "./reducers/globalStateProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <div className="App">
          <HomePage />
        </div>
      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
