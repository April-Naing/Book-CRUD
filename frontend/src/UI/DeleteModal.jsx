import Button from "./Button";
import classes from './DeleteModal.module.css';
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ id , onConfirm }){
    const navigate = useNavigate();

    const handleDelete = async() => {
        console.log('Delete')
        await deleteBook(id);
        navigate('..')
    }

    return(
        <div className={classes.backdrop} onClick={onConfirm}>
            <div className={classes.card}>
                <div className={classes.box}>
                    <h2>Delete</h2>
                    <hr className={classes.line} />
                    <p>Are you sure that you want to delete this data?</p>
                    <div className={classes.btn}>
                        <Button onClick={onConfirm} className={classes.addCancelBtn}>Cancel</Button>
                        <Button onClick={handleDelete} className={classes.addConfirmBtn}>Confirm</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

async function deleteBook(id){
    await fetch('http://localhost:8080/books/' + id , {
        method : 'DELETE' ,
        headers : {
            'Content-type' : 'application/json'
        }
    })
}