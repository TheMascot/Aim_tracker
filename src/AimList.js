import { AimTimeframe } from './AimTimeframes.js';

export function AimList({ aims, onDeleteAim, onAimDone }) {
  const aimsToday = aims.filter((el) => el.type === 'today');
  const aimsWeek = aims.filter((el) => el.type === 'week');
  const aimsMonth = aims.filter((el) => el.type === 'month');
  const aimsYear = aims.filter((el) => el.type === 'year');

  return (
    <div className="aim-list">
      <AimTimeframe
        aims={aimsToday}
        onDeleteAim={onDeleteAim}
        onAimDone={onAimDone}
        timeframe={'Today'}
      ></AimTimeframe>
      <AimTimeframe
        aims={aimsWeek}
        onDeleteAim={onDeleteAim}
        onAimDone={onAimDone}
        timeframe={'This week'}
      ></AimTimeframe>
      <AimTimeframe
        aims={aimsMonth}
        onDeleteAim={onDeleteAim}
        onAimDone={onAimDone}
        timeframe={'This month'}
      ></AimTimeframe>
      <AimTimeframe
        aims={aimsYear}
        onDeleteAim={onDeleteAim}
        onAimDone={onAimDone}
        timeframe={'This year'}
      ></AimTimeframe>
    </div>
  );
}
