import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About/About";
import LoginPage from "./components/LoginForm/LoginFormComponent";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support"


function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
