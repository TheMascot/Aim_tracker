import { AimEntries } from './AimEntries.js';

export function AimTimeframe({ aims, onDeleteAim, onAimDone, timeframe }) {
  return (
    <div className="aim-today">
      <h3>{timeframe}</h3>
      <ul>
        {aims.map((el) => (
          <AimEntries
            aim={el}
            onDeleteAim={onDeleteAim}
            key={el.key}
            onAimDone={onAimDone}
          ></AimEntries>
        ))}
      </ul>
    </div>
  );
}
