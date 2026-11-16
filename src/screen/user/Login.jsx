import { Link } from "react-router"

export default function Login() {
  return (
    <div className=" flex flex-col items-center m-1">
      <form className="bg-gray-300 flex flex-col gap-2 p-2">
        <label className="self-center">Log In</label>
        <input placeholder="Email" className="bg-gray-100 text-black p-1" />
        <input placeholder="Password" className="bg-gray-100 text-black p-1" />
      </form>
      <p className="mt-2">New? <Link to="/register" className="bg-gray-100 border border-gray-300 rounded-sm p-1">Register.</Link></p>
    </div>
  )
}
