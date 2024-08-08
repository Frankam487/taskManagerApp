import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Task from "./pages/Task";
import CreateTask from "./pages/CreateTask";

const App = () => {
    return (
        <>


            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/task" element={<Task />} />
                    <Route path="/createTask" element={<CreateTask />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;