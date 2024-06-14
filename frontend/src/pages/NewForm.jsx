import FormComponent from "../UI/Form";
import { redirect } from 'react-router-dom';

export default function NewForm(){
    return(
        <FormComponent task="New" btn="Save"/>
    )
}

export async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // console.log(data)

    const response = await fetch('http://localhost:8080/books' , {
        method : 'POST' , 
        body : JSON.stringify(data) ,
        headers : {
            'Content-type' : 'application/json'
        }
    })

    if(!response.ok){
        throw new Error('This is error')
    }

    return redirect('/')
}