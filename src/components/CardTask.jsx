import axios from "axios";
import { useState } from "react";

const CardTask = ({ task }) => {
    const handleDelete = (id) => {
         axios.delete(`http://localhost:1000/tasks/${id}`)
        window.location.reload();
    }

    return (

        <div className="card">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <div className="btn-content">
            <select >
                <option value="">No status filter</option>
                <option value="">Open</option>
                <option value="">Progress</option>
            </select>
            <button onClick={() => {
                if (window.confirm("Supprimer ?")) {
                    handleDelete(task.id)
                }
            }
            }>Delete</button>
            </div>
        </div>
    );

}
export default CardTask;