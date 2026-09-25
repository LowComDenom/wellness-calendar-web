import { Routes, Route } from "react-router"

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="*" element={<Err404 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
