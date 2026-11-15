import DayPreview from "./DayPreview"

export default function Month({ name, dayCount }) {
  
  const days = (() => {
    const _days = []
    for (let i = 1; i <= dayCount; i++) _days.push({id: i})
    return _days
  })()
  
  return (
    <div className="bg-white outline-1 p-2">
      <h2 className="text-2xl">{name}</h2>
      <div className="grid grid-flow-row grid-cols-7 gap-1.5 ">
        {days.map(day => (
          <DayPreview key={day.id} day={day.id} />
        ))}
      </div>
      2026
    </div>
  )
}
