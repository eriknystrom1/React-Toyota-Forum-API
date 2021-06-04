import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import PostLike from './PostLike';
import PostThread from './PostThread'
import {Link} from 'react-router-dom'
import PostComment from './PostComment'
import Background from './toyota-rav4-hybrid-2019-wallpaper.jpg';


const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const GetThreads = () => {
    const {categoryId} = useParams();
    const getCategoryThreadsURL = `${baseURL}/category/${categoryId}/thread`

    const [threads, setThreads] = useState([]);

    useEffect(() => {
        if(threads.length === 0) {
            fetch(getCategoryThreadsURL).then(res => res.json().then(data => setThreads(data)))
        }
    })

    const styleObj = {
        fontSize: 40,
        color: "ivory",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "20px"
    }

    const styleObjCategoriesThreads = {
        fontSize: 10,
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
        borderSpacing: "120px 15px",
        textAlign: "center",
        margin: "auto",
        

    }

    const button = {
        backgroundColor: "blue",
        border: "none",
        color: "white",
        padding: "15px 10px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        borderRadius: "8px",
        transitionDuration: "0.4s",
        cursor: "pointer"

    }

    
    const listStyle = {
        display: "flex",
        flexDirection: "column-reverse",
        borderCollapse: "separate",

        paddingBottom: "20px",
        paddingTop: "20px",
        color: "red",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold"


    
    };

    

    return(
    <>

            
<div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'repeat',
                    backgroundSize: 'cover',   backgroundAttachment: "fixed",

                    height: '', }}>

<h1 style={styleObj}>Threads:</h1>



        <div>
            <tbody style={listStyle}>
                {threads.map( t => (
                    <tr>
                        

                    <p style={{borderBottom: "2px solid", borderTop: "2px solid", borderWidth: "10px", padding: "5px 3px", color: "gold", fontSize: "30px", fontWeight: "normal"}}>Title: {t.title}</p>
                    <p style={{borderBottomLeftRadius: "120px 70px", borderBottomRightRadius: "120px 70px", border: "2px solid", color: "gold", fontWeight: "normal",  padding: "5px 3px", fontSize: "30px"}}>Content: {t.content}</p>
                    <PostComment id={t._id}/>
                    <PostLike id={t._id} type="THREAD"></PostLike>
                </tr>
                ))}
                </tbody>           
                <PostThread categoryId={categoryId}/>
        </div>
        </div>
    </>
    )
}

export default GetThreads