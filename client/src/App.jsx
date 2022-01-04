import Home from "./pages/home/Home";
import "./app.scss"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home type="movies"/>} />
        <Route exact path="/" element={<Home type="series"/>} />
        <Route exact path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  )
};

export default App;