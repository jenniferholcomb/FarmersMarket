import React from "react";
import Seasonal from "./Seasonal";
import logoImage from "./../img/farm-diagonal.png";
import logoArt from "./../img/farm-logo.svg"

const availableProduce = [  
  {  
     month: "January",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  },
  {  
     month: "February",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "March",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "April",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Garlic",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "May",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Cauliflower",
        "Garlic",
        "Lettuce",
        "Potatoes",
        "Radishes"
     ]
  },
  {  
     month: "June",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Blackberries",
        "Cherries",
        "Raspberries",
        "Strawberries",
        "Asparagus",
        "Broccoli",
        "Cauliflower",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash"
     ]
  },
  {  
     month: "July",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Raspberries",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "August",
     selection: [  
        "Apples",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Rhubarb",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "September",
     selection: [  
        "Apples",
        "Blueberries",
        "Grapes",
        "Melons",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "October",
     selection: [  
        "Apples",
        "Grapes",
        "Hazelnuts",
        "Melons",
        "Peaches",
        "Pears",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Pumpkins",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "November",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "December",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
       "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  }
];

class SeasonalControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: 'April'
    }
  }

  // handleClick = (changeState) => {
  //   this.setState(prevState => ({
  //     selectedMonth: changeState
  //   }));
  // }

  handleSelect = (e) => {
    this.setState(() => ({
      selectedMonth: e.target.value
    }));
  }

  render() {
    let currentMonth = null;

    if (this.state.selectedMonth === 'January') {
      currentMonth = 0;
    } else if (this.state.selectedMonth === 'February') {
      currentMonth = 1;
    } else if (this.state.selectedMonth === 'March') {
      currentMonth = 2;
    } else if (this.state.selectedMonth === 'April') {
      currentMonth = 3;
    } else if (this.state.selectedMonth === 'May') {
      currentMonth = 4;
    } else if (this.state.selectedMonth === 'June') {
      currentMonth = 5;
    } else if (this.state.selectedMonth === 'July') {
      currentMonth = 6;
    } else if (this.state.selectedMonth === 'August') {
      currentMonth = 7;
    } else if (this.state.selectedMonth === 'September') {
      currentMonth = 8;
    } else if (this.state.selectedMonth === 'October') {
      currentMonth = 9;
    } else if (this.state.selectedMonth === 'November') {
      currentMonth = 10;
    }else {
      currentMonth = 11;
    }
    return (
      <React.Fragment>
        <div className="seasonal">
          <div className="seasonal-top">
            <div className="clip">
              <img src={logoImage} alt="Farm field" />
              <div className="diag-lines-yellow"></div>
              <div className="diag-lines-red"></div>
              <div className="diag-lines-blue"></div>
            </div>
            <div className="overlay">
              <img src={logoArt} alt="Logo" />
            </div>    
            <div className="produce">
              <Seasonal 
                month={availableProduce[currentMonth].month}
                selection={availableProduce[currentMonth].selection}
              />
            </div>
          </div>
          <div className="seasonal-bottom">
            <select name="month" className="month-select" onChange={this.handleSelect}>
            <option value="">--SELECT A MONTH--</option>
              <option value="January">JANUARY</option>
              <option value="February">FEBRUARY</option>
              <option value="March">MARCH</option>
              <option value="April">APRIL</option>
              <option value="May">MAY</option>
              <option value="June">JUNE</option>
              <option value="July">JULY</option>
              <option value="August">AUGUST</option>
              <option value="September">SEPTEMBER</option>
              <option value="October">OCTOBER</option>
              <option value="November">NOVEMBER</option>
              <option value="December">DECEMBER</option>
            </select>
            <h3 className="seasonal-text">SEASONAL<br />THIS MONTH<br />AT THE MARKET!</h3>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SeasonalControl;

{/* <React.Fragment>
<select name="month" className="month-select" onChange={this.handleSelect}>
<option value="">--Please choose a month--</option>
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>
<ProduceDisplay 
  month={monthData.month}
  selection={monthData.selection}
/>
</React.Fragment> */}

// {availableProduce.map((item, index) => <CDropdownItem onClick={() => this.handleClick(availableProduce[index].month)}>{availableProduce[index].month}</CDropdownItem>)}
// <CDropdown variant="btn-group" direction="dropup">
//     <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
//     <CDropdownMenu>
//       <CDropdownItem href="#">Action</CDropdownItem>
//       <CDropdownItem href="#">Another action</CDropdownItem>
//       <CDropdownItem href="#">Something else here</CDropdownItem>
//       <CDropdownDivider/>
//    </CDropdownMenu>
//   </CDropdown>
//{availableProduce.map((item, index) => <p>{<button onClick={() => this.handleClick(availableProduce[index].month)}>{availableProduce[index].month}</button>}</p>)}      <CDropdownItem href="#">Separated link</CDropdownItem>
 
{/* <select name="month" className="month-select" onchange={this.handleSelect}>
{availableProduce.map((item, index) => <option value={availableProduce[index].month}>{availableProduce[index].month}</option>)}
</select> */}