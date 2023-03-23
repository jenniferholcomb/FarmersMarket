import React from "react";
import Header from "./Header";
import CalendarControl from "./CalendarControl";
import Seasonal from "./Seasonal";
import Stories from "./Stories";

function App() {
  return (
    <React.Fragment>
      <div id="header">
        <Header/>
      </div>
      <div id="main-body">
        <CalendarControl/>
        <Stories/>
        <Seasonal/>
      </div>
    </React.Fragment>
  );
}

export default App;