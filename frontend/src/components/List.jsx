import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./List.module.css";
import {NavLink , Link , Form, useLoaderData } from 'react-router-dom';
import { formatDate } from "../assets/formatter";
import Paginate from "../UI/Paginate";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function List() {
    const loader = useLoaderData();
    const books = loader.data ;
    const currentPage = useSelector((state)=>state.page);
    const [ title , setTitle ] = useState();
    console.log(books)
    const itemsPerPage = 3 ;

    const totalPages = Math.ceil(books.length / itemsPerPage)
  console.log(books.length)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = books.slice(startIndex, startIndex + itemsPerPage);

    const handleSearchTitle = (event) => {
      setTitle(event.target.value);
    };

    console.log(currentPage, totalPages)
    // filterBook
    let content = '';
    if(title){
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
      )

      content = filteredBooks.map((books)=>
          (<tr key={books._id}>
          <td>{books.title}</td>
          <td>{books.author}</td>
          <td>{books.status}</td>
          <td>{formatDate(books.checkout_date)}</td>
          <td>
            <Link to={`/view/${books._id}`}>
              <button className={classes.viewBtn}>View</button>
            </Link>
          </td>
          <td>
            <Link to={`/edit/${books._id}`}>
              <button className={classes.deleteBtn}>Edit</button>
            </Link>
          </td>
        </tr>
      )
      )
    }

  return (
    <Card className={classes.cardContainer}>
        <div className={classes.head}>
          <h3 className={classes.h3}>Books</h3>
          <p className={classes.btn}>
            <NavLink to='/new'><Button>Create</Button></NavLink>
          </p>
        </div>
        <Form method="post" className={classes.form}>
          <input
            type="text"
            className={classes.centeredInput}
            placeholder="Enter book title..."
            name="title"
            onChange={handleSearchTitle}
          />
        </Form>
        <div className={classes.tableContainer}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Checkout Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!title && currentItems.map((book)=>(
                <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.status}</td>
                <td>{formatDate(book.checkout_date)}</td>
                <td>
                  <Link to={`/view/${book._id}`}>
                    <button className={classes.viewBtn}>View</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/edit/${book._id}`}>
                    <button className={classes.deleteBtn}>Edit</button>
                  </Link>
                </td>
              </tr>
              ))}
             {content}
            </tbody>
          </table>
          <Paginate currentPage={currentPage} totalPages={totalPages} />
          {/* <Paginate page={page} setPage={setPage} placeholder={isPlaceholderData}/> */}
        </div>
    </Card>
  );
}

export async function loader(){

    const res = await fetch('http://localhost:8080/books');
    const resData = await res.json();

    return resData;
}
