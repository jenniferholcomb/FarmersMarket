import React from "react";
import CalendarControl from "./CalendarControl";
import SeasonalControl from "./SeasonalControl";

function App() {
  return (
    <React.Fragment>
      <div className="main-body">
        <CalendarControl/>
        <SeasonalControl/>
      </div>
    </React.Fragment>
  );
}

export default App;