import DayPreview from "./days/DayPreview";

export default function Month() {
  // generate days programatically based on the passed down prop
  return (
    <div className="month">
      <h2>Month</h2>
      <DayPreview />
    </div>
  )
}