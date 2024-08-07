import { BrowserRouter, Route, Router } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Login />
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Router>
        </BrowserRouter>
    );
}

export default App;