import Month from "./Month"

const months = (() => {
  const _months = []
  for (let i = 1; i < 13; i++) {
    let name
    let days

    switch (i) {
      case 1: name = "January"; days = 31; break;
      case 2: name = "February"; days = 28; break;
      case 3: name = "March"; days = 31; break;
      case 4: name = "April"; days = 30; break;
      case 5: name = "May"; days = 31; break;
      case 6: name = "June"; days = 30; break;
      case 7: name = "July"; days = 31; break;
      case 8: name = "August"; days = 30; break;
      case 9: name = "September"; days = 30; break;
      case 10: name = "October"; days = 31; break;
      case 11: name = "November"; days = 30; break;
      case 12: name = "December"; days = 31; break;
    }
  
    _months.push({
      id: i,
      name,
      days
    })
  }
  return _months
})()

export default function Calendar() {
  // pass down a prop that contains data to inform month components
  return (
    <div className='flex flex-col items-center min-h-0 gap-4 m-1'>
      {months.map(month => (
        <Month name={month.name} dayCount={month.days} key={month.id} />        
      ))}
    </div>
  )
}
