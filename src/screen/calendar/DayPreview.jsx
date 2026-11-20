/**
 * 
 * @returns Component to fill in the non-empty cells on each month
 */
export default function DayPreview({ day, date, count, onSelect }) {
  // cells are grayed out if no note is present for that date
  const hasNotes = count > 0

  return (
    <button
      type="button"
      disabled={!hasNotes}
      onClick={() => onSelect(date)}
      aria-label={`${date}, ${count} notes`}
      className="border-2 rounded-md p-1 disabled:cursor-default disabled:opacity-50"
    >
      <span className="text-xl text-center">{day}</span>
      {hasNotes && <span className="bg-red-400 border-none rounded-xl text-center text-sm block">{count}</span>}
    </button>
  )
}
