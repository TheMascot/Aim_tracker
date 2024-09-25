// Initial source array

import { useState } from "react";

function generateUniqueID() {
  return crypto.randomUUID();
}

const initialAims = [
  { name: "Cleaning the bathroom", type: "today", importance: 7, key: generateUniqueID() },
  { name: "Visiting the dentist", type: "week", importance: 5, key: generateUniqueID() },
  { name: "Learn to cook italian dishes", type: "year", importance: 4, key: generateUniqueID() },
  { name: "Send a postcard to Fred", type: "today", importance: 5, key: generateUniqueID() },
  { name: "Find a new phone to buy", type: "month", importance: 8, key: generateUniqueID() },
];
// console.log(initialAims);
// Components

function App() {
  // States
  const [aims, setAims] = useState(initialAims);

  function handleAddAim(aim) {
    setAims((aims) => [...aims, aim]);
  }

  return (
    <div className="container">
      <Header>AIM TRACKER</Header>
      <Form aims={aims} onAddAim={handleAddAim}></Form>
      <AimList aims={aims}></AimList>
      <Sort></Sort>
    </div>
  );
}

function Header({ children }) {
  return (
    <header>
      <img src="darts-b&w.jpg" alt="bullseye"></img>
      <h1>{children}</h1>
      <img src="darts-b&w.jpg" alt="bullseye"></img>
    </header>
  );
}

function Form({ aims, onAddAim }) {
  // creating a new aim object
  function handleSubmit(e) {
    e.preventDefault();
    onAddAim({
      name: "Find a new phone to buy",
      type: "month",
      importance: 8,
      key: generateUniqueID(),
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row first-line">
        <p>Add Your Aim for</p>
        <select>
          <option value="today" key="1">
            Today
          </option>
          <option value="week" key="2">
            This week
          </option>
          <option value="month" key="3">
            This month
          </option>
          <option value="year" key="4">
            This year
          </option>
        </select>
        <p>to achieve:</p>
        {
          //make it dinamically scale its width with input length (?)
        }
        <input type="text" placeholder="Type your task here" required={true} />
      </div>
      <div className="form-row second-line">
        <p>and set it's importance to</p>
        <select>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num, _, arr) => (
            <option value={num} key={num}>
              {`${num}/${arr.length}`}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={(e) => onAddAim(e)}>Add it!</Button>
    </form>
  );
}
function AimList({ aims }) {
  const aimsToday = aims.filter((el) => el.type === "today");
  const aimsWeek = aims.filter((el) => el.type === "week");
  const aimsMonth = aims.filter((el) => el.type === "month");
  const aimsYear = aims.filter((el) => el.type === "year");
  // console.log(aimsToday);

  return (
    <div className="aim-list">
      <AimToday aims={aimsToday}></AimToday>
      <AimWeek aims={aimsWeek}></AimWeek>
      <AimMonth aims={aimsMonth}></AimMonth>
      <AimYear aims={aimsYear}></AimYear>
    </div>
  );
}

function AimToday({ aims }) {
  return (
    <div className="aim-today">
      <h3>Today</h3>
      <ul>
        <AimEntries aims={aims}></AimEntries>
      </ul>
    </div>
  );
}

function AimWeek({ aims }) {
  return (
    <div className="aim-week">
      <h3>This week</h3>
      <ul>
        <AimEntries aims={aims}></AimEntries>
      </ul>
    </div>
  );
}

function AimMonth({ aims }) {
  return (
    <div className="aim-month">
      <h3>This month</h3>
      <ul>
        <AimEntries aims={aims}></AimEntries>
      </ul>
    </div>
  );
}

function AimYear({ aims }) {
  return (
    <div className="aim-year">
      <h3>This year</h3>
      <ul>
        <AimEntries aims={aims}></AimEntries>
      </ul>
    </div>
  );
}

function AimEntries({ aims }) {
  // console.log(aims);
  return aims.map((el) => (
    <li className="aim-element" key={el.key}>
      {el.name} ({el.importance})
      <div>
        <Button>✔</Button>
        <Button>✖</Button>
      </div>
    </li>
  ));
}

function Sort() {
  return (
    <div className="sort">
      <p>Sort my aims by</p>
      <select>
        <option>Order of input</option>
        <option>Alphabet</option>
        <option>Importance</option>
      </select>
      <Button>Sort it!</Button>
    </div>
  );
}
function Button({ children }) {
  return <button>{children}</button>;
}
export default App;

// controlled elements in form
// check if e.preventDefault is implemented well
