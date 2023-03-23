import React from "react";
import Header from "./Header";
import CalendarControl from "./CalendarControl";
import SeasonalControl from "./SeasonalControl";
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
        <SeasonalControl/>
      </div>
    </React.Fragment>
  );
}

export default App;