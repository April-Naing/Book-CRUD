import { useLoaderData , Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./BookDetail.module.css";
import DeleteModal from "../UI/DeleteModal";
import { useState } from "react";
import { formatDate } from "../assets/formatter";

export default function BookDetail() {
    const loader = useLoaderData();
    const book = loader.data.data ;
    console.log(book)
    console.log(loader)

    const [ modalIsOpen , setModalIsOpen ] = useState(false);

    function handleOpenModal(){
        setModalIsOpen(true);
    }

    function handleCloseModal(){
        setModalIsOpen(false);
    }

  return (
    <>
    {modalIsOpen && <DeleteModal id={book._id} onConfirm={handleCloseModal}/>}
    <Card>
      <div className={classes.btn}>
        <Link to=".."><button className={classes.backBtn}>Back</button></Link>
        <button onClick={handleOpenModal} className={classes.deleteBtn}>Delete</button>
      </div>
      <div className={classes.box}>
        <div className={classes.items}>
          <p>Title</p>
          <p>Author</p>
          <p>Status</p>
          <p>CheckOut</p>
        </div>
        <div className={classes.contents}>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div className={classes.contents}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.status}</p>
          <p>{formatDate(book.checkout_date)}</p>
        </div>
      </div>
    </Card>
    </>
  );
}

