import { Outlet } from "react-router"

import { TopBar, Footer } from "./Navigation"

export default function Layout() {
  return (
    <div className='bg-violet-100 flex flex-col h-screen overflow-hidden'>
      <TopBar />
      <main className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
