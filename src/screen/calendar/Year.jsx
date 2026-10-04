import Month from "./Month";

export default function Year() {
  // generate months programatically based on the passed down prop
  return (
    <div className="year">
      <h1>Year</h1>
      <Month />
    </div>
  )
}