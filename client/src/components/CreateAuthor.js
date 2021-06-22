import Reach, { useState } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { Link, navigate } from '@reach/router';

const CreateAuthor = (props) => {
    const [ errors, setErrors ] = useState({});
    const [ author, setAuthor ] = useState({
        name: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", author)
            .then((res) => {
                console.log(res.data)
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div classname="header">
                <h1>Favorite authors</h1>
                <Link to='/'>Home</Link>
                <p>Add a new author:</p>
                <div>
                    <AuthorForm author={ author } setAuthor={ setAuthor } errors={ errors } handleSubmit={ handleSubmit } btnLabel={ 'Submit' } />
                </div>
                
            </div>
        </div>
    )

}

export default CreateAuthor;