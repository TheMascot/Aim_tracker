import { useState } from "react";
import { generateUniqueID } from "./App";
import { Button } from "./Button";

export function Form({ onAddAim }) {
  // States
  const [timeline, setTimeline] = useState("today");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState(1);

  // creating a new aim object upon Submit
  function handleSubmit(e) {
    e.preventDefault();
    onAddAim({
      name: description,
      type: timeline,
      importance: importance,
      key: generateUniqueID(),
      timestamp: new Date(),
      done: false,
    });
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row first-line">
        <p>Add Your Aim for</p>
        <select value={timeline} onChange={(e) => setTimeline(e.target.value)}>
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
        <input
          type="text"
          placeholder="Type your task here"
          required={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-row second-line">
        <p>and set it's importance to</p>
        <select value={importance} onChange={(e) => setImportance(Number(e.target.value))}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num, _, arr) => (
            <option value={num} key={num}>
              {`${num}/${arr.length}`}
            </option>
          ))}
        </select>
      </div>
      <Button>Add it!</Button>
    </form>
  );
}
