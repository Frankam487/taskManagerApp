import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardTask from "../components/CardTask";

const Task = () => {
    const [tasks, setTask] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:13000/tasks").then((res) => setTask(res.data));
    }, [])
    return (
        <div className="task">
            <div className="header">
                <h2>Get things done.</h2>
                <div className="left-part">
                    <Link to='/createTask'>+ CREATE TASK</Link>
                    <button>-*</button>
                </div>
                <div className="searchInput">
                    <input type="search" placeholder="Search" />
                </div>
                <div className="filter">
                    <select >
                        <option value="">No status filter</option>
                        <option value="">No status filter</option>
                        <option value="">No status filter</option>
                    </select>
                </div>
            </div>
            {
                tasks.map((task) => (
                    
                    <CardTask key={task.id} task={task} setTask={setTask}/>
                ))
            }
        </div>
    );
}

export default Task;