import { useState } from 'react';
import { Header } from './Header';
import { Form } from './Form';
import { AimList } from './AimList';
import { Sort } from './Sort';

// helper function
export function generateUniqueID() {
  return crypto.randomUUID();
}

// Components

function App() {
  // States
  const [aims, setAims] = useState(function () {
    const storedAims = localStorage.getItem('aims');
    return JSON.parse(storedAims);
  });

  function handleAddAim(aim) {
    setAims((aims) => [...aims, aim]);
  }

  function handleDeleteAim(passedKey) {
    setAims((aims) => aims.filter((el) => el.key !== passedKey));
  }

  function handleAimDone(passedKey) {
    setAims(() => aims.map((el) => (el.key === passedKey ? { ...el, done: !el.done } : el)));
  }

  return (
    <div className="container">
      <Header>AIM TRACKER</Header>
      <Form aims={aims} onAddAim={handleAddAim}></Form>
      <AimList aims={aims} onDeleteAim={handleDeleteAim} onAimDone={handleAimDone}></AimList>
      <Sort aims={aims} setAims={setAims}></Sort>
    </div>
  );
}

export default App;
