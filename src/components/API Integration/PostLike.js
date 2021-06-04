import React, { useState } from 'react'

const PostLike = ({id, type}) => {
    let postLikeURL = "";
    if(type === "COMMENT") {
        postLikeURL = `https://forum-api-jkrop.ondigitalocean.app/comment/${id}/like`;
    }
    else if(type === "THREAD") {
        postLikeURL = `https://forum-api-jkrop.ondigitalocean.app/thread/${id}/like`;
    }
    else{
        postLikeURL = "";
    }

    const [res, setRes] = useState('');

    const submitLike = async () => {
        const apiResponse = await fetch(postLikeURL, {
            method: 'POST'}
        );

        const data = await apiResponse.json();
        setRes(JSON.stringify(data));

    }

    
    const styleObj = {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        paddingTop: "20px",
    }
  
    const styleObjCategoriesThreads = {
        fontSize: 10,
        color: "white",
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
        padding: "10px 20px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        borderRadius: "8px",
        transitionDuration: "0.4s",
        cursor: "pointer",
        marginBottom: "100px"
  
    }
    
    const textArea = {
  
      width: "25%",
      height: "90px",
      padding: "12px 20px",
      boxSizing: "border-box",
      border: "2px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#f8f8f8",
      fontSize: "16px",
      resize: "none",
  }
  
  const textArea1 = {
  
    width: "80%",
    height: "70px",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
    fontSize: "16px",
    resize: "none",
  }
  const textArea2 = {
  
    width: "80%",
    height: "40px",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
    fontSize: "16px",
    resize: "none",
  }
  
    
    const listStyle = {
        display: "flex",
        borderCollapse: "separate",
  
        borderSpacing: "175px 15px",
        paddingBottom: "20px",
        paddingTop: "20px",
        color: "white",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        fontSize: "12px",
        fontWeight: "bold"
    };
  
  

    return postLikeURL !== "" ? (
        <div>
            <h3 style={{paddingTop: "20px", fontSize: "16px", fontWeight: "normal"}}>Comment from API - Like:</h3>  

            <textarea style={textArea}  value={res}></textarea><br></br>
            <button  style={button} onClick={() => submitLike()}>I Like this!</button>

        </div>) : (<p>Error!</p>)
}

export default PostLike