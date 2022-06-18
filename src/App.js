import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./component/Create";
import Blogdetails from "./component/Blogdetails";
import NotFound from "./component/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Blogdetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
