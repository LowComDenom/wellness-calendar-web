// small day component to fill out the calendar and timeline
export default function DayPreview({day}) {
  return (
    <div className='outline-1 p-1'>
      <h3 className="text-xl text-center">{day}</h3>
    </div>
  )
}
