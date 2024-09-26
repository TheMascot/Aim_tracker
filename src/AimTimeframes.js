import { AimEntries } from "./AimEntries.js";

export function AimToday({ aims, onDeleteAim, onAimDone }) {
  return (
    <div className="aim-today">
      <h3>Today</h3>
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
export function AimWeek({ aims, onDeleteAim, onAimDone }) {
  return (
    <div className="aim-week">
      <h3>This week</h3>
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

export function AimMonth({ aims, onDeleteAim, onAimDone }) {
  return (
    <div className="aim-month">
      <h3>This month</h3>
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

export function AimYear({ aims, onDeleteAim, onAimDone }) {
  return (
    <div className="aim-year">
      <h3>This year</h3>
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
