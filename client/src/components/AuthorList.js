import '../App.css';
import React from 'react';
import { Link } from '@reach/router';
import DeleteAuthor from '../components/DeleteAuthor';

const AuthorList = (props) => {

    return (
        <div>
            <div classname="header">
                <h1>Favorite authors</h1>
                <Link to='/authors/new'>Add an Author</Link>
                <p>We have quotes by:</p>
            </div>
            <div className="listsection">
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.authors.map((author, index) => {
                        return <tr key={ index }>
                            <td>{ author.name }</td>
                            <td><Link to={`/authors/edit/${author._id}`} classname="tablebtn">Edit</Link><DeleteAuthor /></td> {/* add delete button */}
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
           
        </div>
    )


}

export default AuthorList;