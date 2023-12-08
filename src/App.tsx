import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<>Home</>} />
            <Route path="/about" element={<>About</>} />
            <Route path="/contact" element={<>Contact</>} />
            <Route path="/services" element={<>Services</>} />
            <Route path="/login" element={<>Login</>} />
            <Route path="/signup" element={<>Signup</>} />
            <Route path="/dashboard" element={<>Dashboard</>} />
        </Routes>
    );
}

export default App;
