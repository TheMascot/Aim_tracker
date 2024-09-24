function App() {
  return (
    <div className="container">
      <header>
        <span>
          <img src="darts-b&w.jpg" alt="bullseye"></img>
        </span>
        <h1>AIM TRACKER</h1>
        <span>
          <img src="darts-b&w.jpg" alt="bullseye"></img>
        </span>
      </header>
      <form>
        <span>
          <p>Add Your Aim for</p>
        </span>
        <span>
          <select>
            <option value="today">Today</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="year">This year</option>
          </select>
        </span>
        <span>
          <p>to achieve:</p>
        </span>
        <span>
          {
            //make it dinamically scale its width with input length (?)
          }
          <input type="text" placeholder="Type your task here" />
        </span>
        <button>Add it!</button>
      </form>
      <div className="aim-list">
        <div className="aim-today">
          <h3>Today</h3>
        </div>
        <div className="aim-week">
          <h3>This week</h3>
        </div>
        <div className="aim-month">
          <h3>This month</h3>
        </div>
        <div className="aim-year">
          <h3>This year</h3>
        </div>
      </div>
      <div className="sort">
        <p>Sort my aims by</p>
        <select>
          <option>Order of input</option>
          <option>Alphabet</option>
          <option>Importance</option>
        </select>
        <button>Sort it!</button>
      </div>
    </div>
  );
}

export default App;
