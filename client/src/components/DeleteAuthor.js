import React from 'react';
import axios from 'axios';

const DeleteAuthor = (props) => {
    const { id, postDelete } = props;

    const submitDelete = (e, id) => {
        e.preventDefault();

        axios.delete("http://localhost:8000/api/pets/delete" + id)
            .then((res) => {
                postDelete(id);
            })
            .catch(err => { console.log (err); })
    }
    return (
        <button className="deletebtn" onClick={ (e) => submitDelete(e, id) }>Delete</button>
    )
}

export default DeleteAuthor;

