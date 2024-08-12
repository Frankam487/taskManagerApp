import axios from "axios";
import { useState } from "react";

const CardTask = ({ task }) => {
    const [edit, setEdit] = useState(false);
    const [titleEdit, setTitleEdit] = useState("");
    const [textareaEdit, setTextareaEdit] = useState("");
    const handleDelete = (id) => {
        axios.delete(`http://localhost:1000/tasks/${id}`)
        window.location.reload();
    }
    const handleEdit = (id) => {
        const data = {
            title: titleEdit ? titleEdit : task.title,
            description: textareaEdit ? textareaEdit : task.description
        }
        axios.put("http://localhost:1000/tasks/" + id, data).then(() => {
            setEdit(false);
        });
    }
    const dataParser = () => {
        let dateNow = new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });
        return dateNow;
    }
    return (

        <div className="card">

           <div className="head">
           {edit ? <input type="text" defaultValue={titleEdit ? titleEdit : task.title} onChange={(e) => setTitleEdit(e.target.value)} /> : <h2>{titleEdit ? titleEdit : task.title}</h2> } 
            <em>Poste le {dataParser(task.date)}</em>
           </div>
            {edit ? <textarea defaultValue={textareaEdit ? textareaEdit : task.description} onChange={(e) => setTextareaEdit(e.target.value)}></textarea> : <p>{textareaEdit ? textareaEdit : task.description}</p>}

            <div className="btn-content">
                <select >
                    <option value="">No status filter</option>
                    <option value="">Open</option>
                    <option value="">Progress</option>
                </select>
                <div className="btn">
                    {edit ? <button onClick={() => handleEdit(task.id)} className="edit">Valider</button> : <button onClick={() => setEdit(true)} className="edit"
                    >Edit</button>}
                    <button className="delete" onClick={() => {
                        if (window.confirm("Supprimer ?")) {
                            handleDelete(task.id)
                        }
                    }
                    }>Delete</button>
                </div>
            </div>
        </div>
    );

}
export default CardTask;