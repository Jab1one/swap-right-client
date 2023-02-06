import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
