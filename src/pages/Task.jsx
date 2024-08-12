import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardTask from "../components/CardTask";

const Task = () => {
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState("");
    const [tasks, setTask] = useState([]);
    const [select, setSelect] = useState("");
    const str = () => {
        const tite = task.title;
        if (inputSearch.toLocaleLowerCase() === tite.toLocaleLowerCase()) {

        }
    }
    const getData = () => {
        axios.get(`http://localhost:1000/tasks?title=${inputSearch}`).then((res) => setTask(res.data));
    }
    useEffect(() => getData(), [inputSearch])
    const handleClick = () => {
        navigate('/')
    }
    const inputFunc = (e) => {
        setInputSearch(e.target.value);
    }
    return (
        <div className="task">
            <div className="header">
                <h2>Get things done.</h2>

                <div className="btnLink">
                    <Link to='/createTask'>+ CREATE TASK</Link>
                    <button onClick={handleClick}>-*</button>
                </div>
            </div>
            <span className="bar"></span>
            <div className="input-container">
                <div className="searchInput">
                    <input type="search" defaultValue={inputSearch} onChange={(e) => inputFunc(e)} placeholder="Search" />
                </div>
                <div className="filter">
                    <select value={select} onChange={(e) => {
                        console.log(e.target.value)
                        setSelect(e.target.value)
                    }}>
                        <option value="">No status filter</option>
                        <option value="last">Open</option>
                        <option value="progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>
            {
                tasks
                    .sort((a, b) => {
                        if (select === "progress") {
                            return a.title.localeCompare(b.title)
                        } else if (select === "last") {
                            return (
                                [...tasks].sort((a, b) => new Date(b.date) - new Date(a.date))
                            )
                        }
                    })
                    .map((task, index) => (
                        <CardTask key={index} task={task} setTask={setTask} />
                    ))
            }
        </div>
    );
}

export default Task;