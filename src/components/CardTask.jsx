import axios from "axios";

const CardTask = ({ tasks, setTask }) => {

    const handleDelete = () => {
        axios.delete("http://localhost:13000/tasks/" + tasks.id).then(() => {
            console.log('ok');
        });
        
    };
    return (

        <div className="card">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleDelete()}>DEL</button>
        </div>
    );
}

export default CardTask;