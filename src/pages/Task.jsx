import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardTask from "../components/CardTask";

const Task = () => {
    const navigate  = useNavigate();
    const [tasks, setTask] = useState([]);
    const [select, setSelect] = useState("");
    const getData = () => {
        axios.get("http://localhost:1000/tasks/").then((res) => setTask(res.data));
    }
    useEffect(() => getData(), [])
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className="task">
            <div className="header">
                <h2>Get things done.</h2>
                <div className="left-part">
                    <Link to='/createTask'>+ CREATE TASK</Link>
                    <button onClick={handleClick}>-*</button>
                </div>
                <div className="searchInput">
                    <input type="search" placeholder="Search" />
                </div>
                <div className="filter">
                    <select value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="">No status filter</option>
                        <option value="open">Open</option>
                        <option value="progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>
            {
                tasks
                    .sort((a, b) => b.title - a.title)
                    .map((task, index) => (
                        <CardTask key={index} task={task} setTask={setTask} />
                    ))
            }
        </div>
    );
}

export default Task;