import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import SubmissionForm from "./SubmissionForm";

function App() {
  const data = {
    firstName: "Bob",
    lastName: 'Sam',
    uuid: "8d4b85fa-c07f-4697-bad9-8ca8ec118ca7",
    email: "bob@university.edu",
    role: "student",
    currency: "USD"
  };

  return (
    <div className="App">
      <h2>Custom Props Example</h2>
      <SubmissionForm {...data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
