import NoteList from './NoteList'
import SelectedNote from './SelectedNote'

/**
 * 
 * @returns Side bar component that allows editing and creating notes
 */
export default function SideBar({ selectDate, date }) {
  return (
    <div className="bg-white border-3 rounded-md min-h-0 sticky top-0 self-start shrink-0">
      <h3>Day <button onClick={() => { selectDate(null) }} className="bg-gray-100 border-2 border-gray-300 rounded-md p-1">X</button></h3>
      <NoteList />
      <SelectedNote />
    </div>    
  )
}
