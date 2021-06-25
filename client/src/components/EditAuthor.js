import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from './AuthorForm';
// import DeleteAuthor from './DeleteAuthor'

const EditAuthor = (props) => {
    const { id } = props;
    const [ author, setAuthor ] = useState({});
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setAuthor(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/authors/edit/" + id, author)
            .then((res) => {
                console.log(res.data);
                if(res.data.erros) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // const postDelete = () => {
    //         navigate("/");
    //     }

    return (
        <div>
            <div classname="header">
                <h1>Favorite authors</h1>
                <Link to='/'>Home</Link>
                <p>Edit this author:</p>
            </div>
            <div className="listsection">
                <AuthorForm author={ author } setAuthor={ setAuthor } errors={ errors } handleSubmit={ handleSubmit } btnLabel={ 'Submit' } />
            </div>
        </div>
    )

}

export default EditAuthor;