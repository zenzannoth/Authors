import React from 'react';
import '../App.css';
import { navigate } from '@reach/router';

const AuthorForm = (props) => {
    const { author, setAuthor, errors, handleSubmit, btnLabel } = props;

    const updateAuthors = e => {
        console.log(e.target.name);
        let newAuthor = { ...author };
        newAuthor[e.target.name] = e.target.value;
        setAuthor(newAuthor);
    }
return (
    <div>
        <div id="formcontainer" onSubmit={ (e) => handleSubmit(e) }>
            <form>
                <div className="formtxt">
                    <label>Name:</label>
                    {
                        errors.name ?
                        <span className="error">{ errors.name.message }</span>
                        :null
                    }
                    <input type="text" name="name" value={ author.name }
                    onChange={ (e) => updateAuthors(e) } />
                </div>
                <div>
                    <button className="addbtn" type="submit" onClick={() => navigate("/")}>Cancel</button>
                    <button className="addbtn" type="submit">{ btnLabel }</button>
                </div>
            </form>
        </div>
    </div>
        )
}

export default AuthorForm;