import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList'

const Main = () => {
    // const [ message, setMessage ] = useState("Loading...")
    const [ authors, setAuthors ] = useState([])
    const [ loaded, setLoaded ] = useState(false);

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api")
    //         .then(res => 
    //             setMessage(res.data.message))
    //         .catch(err => console.log(err))
    // }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author.id !== authorId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [authors]);

    return (
        // <div>
        //     <h2>Message from the backend: { message }</h2>
        // </div>
        <div>
            { loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>

    )
}




export default Main;