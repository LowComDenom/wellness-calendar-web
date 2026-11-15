The issue is that `min-h-screen` sets a minimum height, not a fixed height. This allows your layout to grow when an `<Outlet />` page contains more content than the viewport.

What you want is:

- The overall layout stays exactly the height of the viewport.
- The navbar and footer remain stationary.
- Only the `<Outlet />` area scrolls when its content overflows.

You can accomplish this using Tailwind's `h-screen`, `flex-1`, `min-h-0`, and `overflow-y-auto`.

## Updated code

jsx

```jsx
import { Outlet, Link } from "react-router"

import NavBar from "./NavBar"

export default function Layout() {
  return (
    <div className="bg-sky-100 flex flex-col h-screen overflow-hidden">
      <NavBar />

      <main className="flex-1 min-h-0 overflow-y-auto">
        <Outlet />
      </main>

      <footer className="bg-indigo-400 flex flex-col shrink-0">
        <div className="flex justify-evenly">
          <FootLink to="/about">About</FootLink>
          <FootLink to="#">Github</FootLink>
        </div>
        <p className="font-[Consolas] text-white self-center">
          Version 0.0
        </p>
      </footer>
    </div>
  )
}

function FootLink({ to, children }) {
  return (
    <Link to={to} className="font-[Cambria] text-white">
      {children}
    </Link>
  )
}
```

## What changed and why?

| Class | Purpose |
| --- | --- |
| `h-screen` | Keeps the layout at viewport height. |
| `overflow-hidden` | Prevents the overall layout from scrolling. |
| `flex-1` | Makes the main content fill the available space. |
| `min-h-0` | Allows the main element to shrink below its content's natural height. |
| `overflow-y-auto` | Adds scrolling only when the outlet content overflows. |
| `shrink-0` | Prevents the footer from shrinking to accommodate large content. |

The most important class here is `min-h-0`.

Flexbox children default to `min-height: auto`, which can prevent them from shrinking below their content's natural height. This is often the reason an outlet pushes the rest of a flex layout beyond the viewport.

## Expected layout

Navbar (fixed height)

Outlet (remaining height)

Page content

More page content

↕ Scrollbar appears here when needed

Footer (fixed height)

One additional tip: if you have nested flex containers inside individual outlet pages, you may need `min-h-0` on those containers too. This ensures scrolling continues to behave correctly throughout nested layouts.
