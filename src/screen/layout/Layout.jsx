import { Outlet } from "react-router"

import { TopBar, Footer } from "./NavBars"

export default function Layout() {
  return (
    <div className='bg-sky-100 flex flex-col h-screen overflow-hidden'>
      <TopBar />
      <main className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
