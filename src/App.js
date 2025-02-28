import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from "./pages/feed";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/global";
import CreateUser from "./pages/create-user";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
