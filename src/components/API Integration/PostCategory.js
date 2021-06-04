import React, { useState, useReducer } from 'react'
import {categoryReducer, getCategoriesAsync} from '../reducers/categoryReducer'
import Background from './toyota-rav4-hybrid-2019-wallpaper.jpg';



const sandbox = 'EriksTestAPI' 
const postCategoryURL = `https://forum-api-jkrop.ondigitalocean.app/sandbox/${sandbox}/category`;

const baseURL = "https://forum-api-jkrop.ondigitalocean.app/sandbox/EriksTestAPI";


const PostCategory = () => {

    const [newCategory, setNewCategory] = useState('');
    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
        setNewCategory(e.target.value);
        setResponse('');
    }

    const submitCategory = () => {
        const requestBody = {
            "name": newCategory
        };

        fetch(postCategoryURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(res => res.json().then(data => {
            setNewCategory('');
            setResponse(JSON.stringify(data));
        }));
    }

    const styleObj = {
        fontSize: 40,
        color: "ivory",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "50px"
    }

    const styleObjCategoriesThreads = {
        fontSize: 30,
        color: "red",
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "40px"
    }

    const box = {

        textAlign: "center",
        width: "100%",
        margin: "auto",        
    }

    const tableTop = {
        display: "inline-block",
        borderCollapse: "separate",
        borderSpacing: "120px 15px",
        textAlign: "center",
        margin: "auto",
        

    }

    const button = {
        backgroundColor: "blue",
        border: "none",
        color: "white",
        padding: "10px 20px",
        marginLeft: "10px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "14px",
        borderRadius: "8px",
        transitionDuration: "0.4s",
        cursor: "pointer"

    }

    const textArea = {

        width: "25%",
        height: "100px",
        padding: "12px 20px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        fontSize: "16px",
        resize: "none",
    }

    
    const listStyle = {
        display: "inline-block",
        borderCollapse: "separate",
        border: "1px solid",
        borderSpacing: "175px 15px",
        paddingBottom: "20px",
        paddingLeft: "45px",
        paddingTop: "20px",
        color: "blue",
        margin: "auto",
        width: "60%",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold"
    };


    return (

        
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', backgroundAttachment: "fixed",
                  height: '520px', }}>

            <h1 style={styleObj}>Add new category:</h1>

            <input 
                type="text" 
                placeholder="Write a category name" 
                value={newCategory}
                onChange={(e) => handleOnChange(e)}>
            </input>
            <button style={button} onClick={() => submitCategory()}>Send</button>
            <h4 style={styleObjCategoriesThreads}>Answer from the API:</h4>

            <textarea style = {textArea} value={response}></textarea>
        </div>
    )
}

export default PostCategory  
