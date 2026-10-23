import DayPreview from "./days/DayPreview";

export default function Month() {
  // generate days programatically based on database
  return (
    <div>
      <h2 class="text-2xl">Month</h2>
      <DayPreview />
    </div>
  )
}
