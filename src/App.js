import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { AimList } from "./AimList";
import { Sort } from "./Sort";

// helper function
export function generateUniqueID() {
  return crypto.randomUUID();
}

// Components

function App() {
  // States
  const [aims, setAims] = useState([]);
  const [sortType, setSortType] = useState("timestamp");

  let sortedAim;
  if (sortType === "timestamp") sortedAim = aims.slice().sort((a, b) => a.timestamp - b.timestamp);
  if (sortType === "alphabet")
    sortedAim = aims.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortType === "importance")
    sortedAim = aims.slice().sort((a, b) => b.importance - a.importance);

  function handleAddAim(aim) {
    setAims((aims) => [...aims, aim]);
  }
  function handleSortChange(type) {
    setSortType(type);
  }
  function handleSortClick() {
    setAims(sortedAim);
  }

  function handleDeleteAim(passedKey) {
    setAims((aims) => aims.filter((el) => el.key !== passedKey));
  }

  function handleAimDone(passedKey) {
    setAims(() => aims.map((el) => (el.key === passedKey ? { ...el, done: !el.done } : el)));
  }

  // function handleDoneAim(passedKey){}

  return (
    <div className="container">
      <Header>AIM TRACKER</Header>
      <Form aims={aims} onAddAim={handleAddAim}></Form>
      <AimList aims={aims} onDeleteAim={handleDeleteAim} onAimDone={handleAimDone}></AimList>
      <Sort
        sortType={sortType}
        onSortChange={handleSortChange}
        onSortClick={handleSortClick}
      ></Sort>
    </div>
  );
}

export default App;
