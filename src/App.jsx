import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Will from "./pages/Will";

const App = () => {
  return (
    <main>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/will" element={<Will />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
};

export default App;
