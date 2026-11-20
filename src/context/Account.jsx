// handle authentication
import {
  useState,
  useCallback, useMemo
} from 'react'

import AccountContext from './AccountContext'

import API from '../utils/api'

export function AccountProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))

  const saveToken = useCallback((value) => {
    if (value) {
      localStorage.setItem('token', value)
    } else {
      localStorage.removeItem('token')
    }
    setToken(value)
  }, [])

  const login = useCallback(async (cred) => {
    const res = await fetch(API + '/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred)
    })
    
    const token = await res.text()
    
    if (!res.ok) {
      throw new Error(token)
    }
    
    saveToken(token)
  }, [saveToken])

  const register = useCallback(async (cred) => {
    const res = await fetch(API + '/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred)
    })

    const token = await res.text()
    
    if (!res.ok) {
      throw new Error(token)
    }
    
    saveToken(token)
  }, [saveToken])

  const logout = useCallback(() => { saveToken(null) },[saveToken])
  
  const value = useMemo(
    () => ({ token, login, logout, register }),
          [token, login, logout, register]
  )

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}