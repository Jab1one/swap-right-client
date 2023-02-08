import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import ListItem from "./pages/ListItem/ListItem";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list-item" element={<ListItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
