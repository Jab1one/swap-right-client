import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import ListItem from "./pages/ListItem/ListItem";
import SwapMain from "./pages/SwapMain/SwapMain";
import YourMatches from "./pages/YourMatches/YourMatches.";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list-item" element={<ListItem />} />
          <Route path="/swap" element={<SwapMain />} />
          <Route path="/my-matches" element={<YourMatches />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
