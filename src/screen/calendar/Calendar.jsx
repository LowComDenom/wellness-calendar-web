import Year from "./Year";

export default function Calendar() {
  // pass down a prop that contains data to inform month components of how many days they need
  return (
    <div className="calendar">
      <Year />
    </div>
  )
}
