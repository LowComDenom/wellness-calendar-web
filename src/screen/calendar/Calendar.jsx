import { useMemo, useEffect } from 'react'

import useAccount from '../../context/useAccount'
import useUserData from '../../context/useUserData'

import Month from './Month'
import SideBar from '../side-bar/SideBar'
import { useState } from 'react'

/**
 * @returns The entire calendar view
 */
export default function Calendar() {
  const { token } = useAccount()
  const { notes, fetchAllNotes } = useUserData()

  // controls visibility of SideBar
  const [selectedDate, selectDate] = useState(null)
  
  useEffect(() => {
    if (token) fetchAllNotes(token)
  }, [token, fetchAllNotes])

  // gets the amount of notes on each date
  const noteCounts = useMemo(() => notes.reduce((counts, note) => {
      counts[note.date] = (counts[note.date] ?? 0) + 1
      return counts
    }, {}), [notes]
  )

  // generated date information that allows components to fill out 18 calendar months
  const months = useMemo(() => {
      const currentYear = new Date().getFullYear()

      return Array.from({ length: 18 }, (_, i) => {
        const firstDay = new Date(currentYear, i, 1)
        const year = firstDay.getFullYear()
        const monthIndex = firstDay.getMonth()

        return {
          year,
          monthIndex,
          name: new Intl.DateTimeFormat(undefined, {
            month: 'long',
            year: 'numeric',
          }).format(firstDay),
          dayCount: new Date(year, monthIndex + 1, 0).getDate(),
          startWeekday: firstDay.getDay(),
        }
      })
    }, [])

  if (!token) return <p className='text-center'>Sign in to use this page.</p>

  return (
    <div className='flex flex-row self-center justify-center'>
      <div className='flex flex-col items-center min-h-0 gap-4'>
        {months.map(month => (
          <Month key={`${month.year}-${month.monthIndex}`} {...month}
            noteCounts={noteCounts}
            onSelect={selectDate}
          />
        ))}
      </div>
      {selectedDate && <SideBar onSelect={selectDate} date={selectedDate} />}
    </div>
  )
}
