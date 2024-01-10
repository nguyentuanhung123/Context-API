import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import User from "./components/pages/User";


const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
