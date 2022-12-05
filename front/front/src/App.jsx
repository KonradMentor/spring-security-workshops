import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Messages from "./Messages";
import NewMessage from "./NewMessage.jsx";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Messages />}>
          </Route>
          <Route exact path="/message/new" element={<NewMessage />}>
          </Route>
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/register" element={<Register />}>
          </Route>
          <Route exact path="/logout" element={<Logout />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
