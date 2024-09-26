import { AimToday, AimWeek, AimMonth, AimYear } from "./AimTimeframes.js";

export function AimList({ aims, onDeleteAim, setAims, onAimDone }) {
  const aimsToday = aims.filter((el) => el.type === "today");
  const aimsWeek = aims.filter((el) => el.type === "week");
  const aimsMonth = aims.filter((el) => el.type === "month");
  const aimsYear = aims.filter((el) => el.type === "year");
  // console.log(aimsToday);
  return (
    <div className="aim-list">
      <AimToday aims={aimsToday} onDeleteAim={onDeleteAim} onAimDone={onAimDone}></AimToday>
      <AimWeek aims={aimsWeek} onDeleteAim={onDeleteAim} onAimDone={onAimDone}></AimWeek>
      <AimMonth aims={aimsMonth} onDeleteAim={onDeleteAim} onAimDone={onAimDone}></AimMonth>
      <AimYear aims={aimsYear} onDeleteAim={onDeleteAim} onAimDone={onAimDone}></AimYear>
    </div>
  );
}
