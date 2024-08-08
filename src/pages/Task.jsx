import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardTask from "../components/CardTask";

const Task = () => {
    const [tasks, setTask] = useState([]);
    const [select, setSelect] = useState("");
    const getData = () => {
        axios.get("http://localhost:1000/tasks/").then((res) => setTask(res.data));
    }
    useEffect(() => getData(), [])
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
                    <select value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="">No status filter</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
            </div>
            {
                tasks
                    .sort((a, b) => b.id - a.id)
                    .map((task, index) => (
                        <CardTask key={index} task={task} setTask={setTask} />
                    ))
            }
        </div>
    );
}

export default Task;