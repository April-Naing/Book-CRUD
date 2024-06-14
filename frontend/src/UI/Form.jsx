import classes from "./Form.module.css"; // Ensure to use CSS Modules
import Card from "./Card";
import Button from "./Button";
import { Form } from "react-router-dom"

function FormComponent({ task , btn , title , author , stat , date}) {
  return (
    <Card>
      <div className={classes.head}>
        <h3 className={classes.h3}>{task}</h3>
      </div>
      <Form method="post" className={classes.form}>
        <div className={classes.formGroup}>
          <label>Title:</label>
          <input
            type="text"
            className={classes.centeredInput}
            placeholder="Enter book title..."
            name="title"
            defaultValue={title} required
          />
        </div>
        <div className={classes.formGroup}>
          <label>Author:</label>
          <input
            type="text"
            className={classes.centeredInput}
            placeholder="Enter author name..."
            name="author"
            defaultValue={author} required
          />
        </div>
        <div className={classes.formGroup}>
          <label>Status:</label>
            <select className={classes.centeredInput} name="status" defaultValue={stat} required>
            <option value="available">Available</option>
            <option value="not-available">Not available</option>
          </select>
        </div>
        <div className={classes.formGroup}>
          <label>Checked out by:</label>
          <input type="date" id="checked-out-date" name="checkout_date" defaultValue={date} required/>
        </div>
        <Button>{btn}</Button>
      </Form>
    </Card>
  );
}

export default FormComponent;

export async function loader({request , params }){
  const res = await fetch('http://localhost:8080/books/' + params.id ) ;
  const data = await res.json();

  if(!res.ok){
     throw new Error('This is error')
  }
  return data;
}
