import { useState, useEffect, useRef } from 'react';

export function Sort({ aims, setAims }) {
  const [sortType, setSortType] = useState('timestamp');
  let sortedAim = useRef([]);

  switch (sortType) {
    case 'timestamp':
      sortedAim.current = aims
        .slice()
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      break;
    case 'alphabet':
      sortedAim.current = aims.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'importance':
      sortedAim.current = aims.slice().sort((a, b) => b.importance - a.importance);
      break;
    default:
      break;
  }

  useEffect(
    function () {
      setAims(sortedAim.current);
    },
    [sortType, setAims]
  );

  function handleSortChange(type) {
    setSortType(type);
  }

  return (
    <div className="sort">
      <p>Sort my aims by</p>
      <select value={sortType} onChange={(e) => handleSortChange(e.target.value)}>
        <option value="timestamp">Order of input</option>
        <option value="alphabet">Alphabet</option>
        <option value="importance">Importance</option>
      </select>
    </div>
  );
}
