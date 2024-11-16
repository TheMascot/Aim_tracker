import { Button } from './Button.js';

export function AimEntries({ aim, onDeleteAim, onAimDone }) {
  function decideStyling(importance) {
    if (importance <= 4) return 'aim-element li-low';
    if (importance <= 7) return 'aim-element li-medium';
    else return 'aim-element li-high';
  }

  return (
    <li className={aim.done ? 'aim-element done' : decideStyling(aim.importance)} key={aim.key}>
      {aim.name} ({aim.importance})
      <div>
        <Button onClick={() => onAimDone(aim.key)}>{aim.done ? '♻' : '✔'}</Button>
        <Button onClick={() => onDeleteAim(aim.key)}>✖</Button>
      </div>
    </li>
  );
}
