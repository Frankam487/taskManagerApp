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
            <button onClick={() => {
                if (window.confirm("Supprimer ?")) {
                    handleDelete(task.id)
                }
            }
            }>Delete</button>
        </div>
    );

}
export default CardTask;