// handle crud and data provision
import {
  useState,
  useCallback, useMemo
} from 'react'

import UserDataContext from './UserDataContext'

import API from '../utils/api'

export function UserDataProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [dateNotes, setDateNotes] = useState([])
  const [selectedNote, setNote] = useState()
  
  const fetchAllNotes = useCallback(async (token) => {
    try {
      const res = await fetch(API + '/notes', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })

      const body = await res.text()

      if (!res.ok) {
        throw new Error(body)
      }
      
      const result = JSON.parse(body)
      
      setNotes(result) 
    } catch (e) {
      console.error(e)
      setNotes([])
    }
  }, [])

  const fetchDateNotes = useCallback(async (token, date) => {
    try {
      const res = await fetch(API + '/notes/by-date/' + date, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })

      const body = await res.text()

      if (!res.ok) {
        throw new Error(body)
      }
      
      const result = JSON.parse(body)
      
      setDateNotes(result) 
    } catch (e) {
      console.error(e)
      setDateNotes([])
    }
  }, [])

  const fetchNote = useCallback(async (token, id) => {
    try {
      const res = await fetch(API + '/notes/by-id/' + id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })

      const body = await res.text()

      if (!res.ok) {
        throw new Error(body)
      }
      
      const result = JSON.parse(body)
      
      setNote(result)
    } catch (e) {
      console.error(e)
      setNote({})
    }
  }, [])

  const newNote = useCallback(async (token, note) => {
    if (!token) throw Error("You aren't logged in.")
    
    const res = await fetch(API + '/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(note)
    })

    const body = await res.text()

    if (!res.ok) {
      throw new Error(body)
    }

    await fetchAllNotes(token)
    await fetchDateNotes(token, note.date)
    // await fetchNote(note.id) Use the ID returned by the create endpoint, if it provides one, or skip this refresh.
  }, [fetchAllNotes, fetchDateNotes])

  const value = useMemo(() =>
    ({ notes, setNotes, dateNotes, setDateNotes, selectedNote, setNote, fetchAllNotes, fetchDateNotes, fetchNote, newNote }),
    [notes, setNotes, dateNotes, setDateNotes, selectedNote, setNote, fetchAllNotes, fetchDateNotes, fetchNote, newNote]
  )
  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
}