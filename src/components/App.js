import React from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import Seasonal from "./Seasonal";
import Stories from "./Stories";

function App() {
  return (
    <React.Fragment>
      <div id="header">
        <Header/>
      </div>
      <div id="main-body">
        <Calendar/>
        <Stories/>
        <Seasonal/>
      </div>
    </React.Fragment>
  );
}

export default App;