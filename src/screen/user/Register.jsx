export default function Register() {
  return (
    <div className="flex flex-col items-center m-1">
      <form className="bg-gray-300 flex flex-col gap-2 p-2">
        <label className="self-center">Sign Up</label>
        <input placeholder="Email" className="bg-gray-100 text-black p-1"/>
      </form>
    </div>
  )
}
