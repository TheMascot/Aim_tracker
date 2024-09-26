import { Button } from "./Button";

export function Sort({ sortType, onSortChange, onSortClick }) {
  return (
    <div className="sort">
      <p>Sort my aims by</p>
      <select value={sortType} onChange={(e) => onSortChange(e.target.value)}>
        <option value="timestamp">Order of input</option>
        <option value="alphabet">Alphabet</option>
        <option value="importance">Importance</option>
      </select>
      <Button onClick={() => onSortClick()}>Sort it!</Button>
    </div>
  );
}
