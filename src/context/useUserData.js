import { useContext } from 'react'

import UserDataContext from './UserDataContext'

export default function useUserData() {
  const context = useContext(UserDataContext)
  if (context === null) throw new Error('Context must be used within its provider')
  return context
}