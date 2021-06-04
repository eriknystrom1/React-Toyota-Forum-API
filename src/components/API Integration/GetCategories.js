import { Button } from 'bootstrap';
import React, { useState, useEffect, useReducer } from 'react'
import { Link } from "react-router-dom";
import {categoryReducer, getCategoriesAsync} from '../reducers/categoryReducer'
import Background from './toyota-rav4-hybrid-2019-wallpaper.jpg';



const sandbox = 'EriksTestAPI' 
const getCategoriesUrl = `https://forum-api-jkrop.ondigitalocean.app/sandbox/${sandbox}/category`;

const baseURL = "https://forum-api-jkrop.ondigitalocean.app/sandbox/EriksTestAPI";

const GetCategories = () => {

    // const [categoriesState, setCategoriesState] = useState([]);
    const initialState = {
        "categories": []
    }
    const [categoriesState, dispatch] = useReducer(categoryReducer, initialState);
    
    useEffect(() => {
            getCategoriesAsync(dispatch);
    },[])

    // useEffect(() => {
    //     fetch(getCategoriesUrl).then(res => res.json().then(data => setCategoriesState(data)));
    // }, [])

    const styleObj = {
        fontSize: 40,
        color: "ivory",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "30px",

    }

    const styleObjCategoriesThreads = {
        fontSize: 30,
        color: "red",
        textAlign: "center",
        paddingTop: "20px",
    }

    const box = {

        textAlign: "center",
        width: "100%",
        margin: "auto",        
    }

    const tableTop = {
        display: "inline-block",
        borderCollapse: "separate",
        borderSpacing: "120px 45px",
        textAlign: "center",
        margin: "auto",
        

    }

    const button = {
        backgroundColor: "blue",
        border: "none",
        color: "ivory",
        padding: "10px 14px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        borderRadius: "8px",
        transitionDuration: "1.0s",
        cursor: "pointer"

    }

    
    const listStyle = {
        display: "inline-block",
        borderCollapse: "separate",

        borderSpacing: "185px 15px",
        paddingBottom: "20px",
        paddingLeft: "30px",
        paddingTop: "20px",
        color: "red",
        margin: "auto",
        width: "70%",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "normal"
    };


    return (
        <>

            <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', backgroundAttachment: "fixed",
                    height: '', }}>


                     
          

    <h1 style={styleObj}>Category List:</h1>

    

                    <table style={tableTop}>
                          <tr>
                              <td><p style={{borderBottomLeftRadius: "120px 70px",
   borderBottomRightRadius:"120px 70px",
   border: "2px solid",
   padding: "15px 30px",
   fontSize: "23px",
   color: "gold"}}>Categories:</p></td>
                              <td><p style={{borderBottomLeftRadius: "120px 70px",
   borderBottomRightRadius:"120px 70px",
   border: "2px solid",
   padding: "15px 30px",
   fontSize: "23px",
   color: "gold"}}>Threads:</p></td>
                              </tr></table>  



            <div style={box}>

                <tbody style={listStyle}>
                    {/* {categoriesState.map( category => ( */}
                    {categoriesState.categories.map( category => (
                    
                    
                        
                        <tr>
                        <td  style={{borderBottom: "2px solid red"}}><p>{category.name}</p></td>
                        <td  style={{borderBottom: "2px solid blue"}}><p style = {button}><Link to={`/category/${category._id}/thread`}>
                            Show Thread:
                        </Link></p></td>
                    </tr>
                    ))}
                </tbody>
            </div>
            </div>
        </>
    )
}

export default GetCategories  
