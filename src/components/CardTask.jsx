import axios from "axios";

const CardTask = ({ task }) => {

    const handleDelete = (id) => {
         axios.delete(`http://localhost:1000/tasks/${id}`)
        window.location.reload();
    }

    // const handleDelete = (id) => {
    //     axios.delete(`http://localhost:1000/tasks/${id}`)
    //         .then((res) => {
    //             window.location.reload();

    //         })
    //         .catch(error => {
    //             if (error.res) {

    //                 if (error.res.status === 404) {
    //                     console.error('Erreur 404 : Ressource non trouvée. Vérifiez l\'ID fourni.');
    //                 } else {
    //                     console.error('Erreur lors de la suppression :', error.res.data);
    //                     console.error('Statut de l\'erreur :', error.res.status);
    //                 }
    //             } else if (error.request) {
    //                 console.error('Aucune réponse reçue du serveur :', error.request);
    //             } else {
    //                 console.error('Erreur :', error.message);
    //             }
    //         });
    // };

    return (

        <div className="card">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => {
                if (window.confirm("Supprimer ?")) {
                    handleDelete(task.id)
                }
            }
            }>DEL</button>
        </div>
    );

}
export default CardTask;