import React from "react";
import Routes1 from "./component/route";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
     
      <Router>
        
          <Routes1 />
        
      </Router>
    </React.Fragment>
  );
}
