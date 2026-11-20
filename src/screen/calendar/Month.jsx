import DayPreview from './DayPreview'

/**
 * 
 * @returns calendar month component
 */
export default function Month({ year, name, monthIndex, startWeekday, dayCount, noteCounts, onSelect}) {
  /*
    generates the amount of cells needed to start the month on the correct weekday
  */ 
  const cellCount = Math.ceil((startWeekday + dayCount) / 7) * 7

  const cells = Array.from({ length: cellCount }, (_, i) => {
    const day = i - startWeekday + 1

    if (day < 1 || day > dayCount) return null

    const month = String(monthIndex + 1).padStart(2, '0')
    const dayOfMonth = String(day).padStart(2, '0')

    return {
      day,
      date: `${year}-${month}-${dayOfMonth}`,
    }
  })

  return (
    <div className="bg-white border-3 rounded-md p-2">
      <h2 className="text-2xl">{name}</h2>
      <div className="grid grid-flow-row grid-cols-7 gap-1.5">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((weekday) => (
          <div key={weekday} className="text-center font-medium">
            {weekday}
          </div>
        ))}

        {cells.map((cell, i) =>
          cell ? (
            <DayPreview key={cell.date} day={cell.day} date={cell.date} count={noteCounts[cell.date] ?? 0} onSelect={onSelect} />
          ) : (
            <div key={`empty-${i}`} aria-hidden="true" />
          )
        )}
      </div>
    </div>
  )
}
