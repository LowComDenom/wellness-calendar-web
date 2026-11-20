import { useContext } from 'react'

import AccountContext from './AccountContext'

export default function useAccount() {
  const context = useContext(AccountContext)
  if (context === null) throw new Error('Context must be used within its provider')
  return context
}
