import FormComponent from "../UI/Form";
import { redirect, useLoaderData } from 'react-router-dom';
import { formatEditDate } from "../assets/formatter";

export default function EditForm(){
    const loader = useLoaderData();
    const book = loader.data.data ;
    const date = formatEditDate(book.checkout_date);

    console.log(book)
    console.log(date)
    return(
        <FormComponent task="Edit" btn="Save" title={book.title} 
          author={book.author} stat={book.status} date={date}/>
    )
}

export async function action({request , params }){
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    await fetch('http://localhost:8080/books/' + params.id , {
        method : 'PATCH' ,
        body : JSON.stringify(data) ,
        headers : {
            'Content-type' : 'application/json'
        }
    })

    return redirect('/');
}

