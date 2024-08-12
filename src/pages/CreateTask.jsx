import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:1000/tasks", {
            title,
            description
        }).then(() => {
            navigate('/task');
        });
    }
    return (
        <div className="createTask">
            <h2>Create a new task</h2>
            <h4>Provide information about the task</h4>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            Title
                        </legend>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </fieldset>
                    <br />
                    <textarea rows={10} cols={76} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <input type="submit" value="CREATE TASK" />
                </form>
            </div>
        </div>
    );
}

export default CreateTask;