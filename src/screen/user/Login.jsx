import { Link, useNavigate } from 'react-router'

import useAccount from '../../context/useAccount'

export default function Login() {
  const { login } = useAccount()
  let nav = useNavigate()

  const tryLogin = async (formData) => {
    const username = formData.get('email')
    const password = formData.get('password')
    try {
      await login({ username, password })
      nav("/calendar")
    } catch (e) {
     console.error(e.message)
    }
  }

  return (
    <div className=" flex flex-col items-center m-1">
      <form action={tryLogin} className="bg-gray-300 flex flex-col gap-2 p-2">
        <label>
          <input type="text" name="email" placeholder="Email" className="bg-gray-100 text-black p-1" required />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" className="bg-gray-100 text-black p-1" required />
        </label>
        <button className="bg-gray-100 border border-gray-300 rounded-md">Log In</button>
      </form>

      <p className="mt-2">New? <Link to="/register" className="bg-gray-100 border border-gray-300 rounded-sm p-1">Register.</Link></p>
    </div>
  )
}