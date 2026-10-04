import { Routes, Route } from "react-router"

import Layout from "./screen/layout/Layout";
import Err404 from "./screen/layout/Err404";
import Login from "./screen/user/Login";
import Register from "./screen/user/Register";
import Landing from "./screen/Landing";
import About from "./screen/About";
import Settings from "./screen/user/Settings";
import Calendar from "./screen/calendar/Calendar";
import Timeline from "./screen/Timeline";
import Stats from "./screen/user/Stats";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Err404 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
