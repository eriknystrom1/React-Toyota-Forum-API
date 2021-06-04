import React, { useState } from 'react'
import {
    useParams
  } from "react-router-dom";

const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const PostThread = () => {
    let {categoryId} = useParams();

    const postThreadURL = `${baseURL}/category/${categoryId}/thread`

    const [threadTitle, setThreadTitle] = useState('');
    const [threadContent, setThreadContent] = useState('');

    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
      setThreadTitle(e.target.value);
    }

    const handleContentChange = (e) => {
      setThreadContent(e.target.value);
    }

    const submitThread = async () => {
      const requestBody = {
        "title": threadTitle,
        "content": threadContent
      };

      const apiResponse = await fetch(postThreadURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(requestBody)
      });
      
      const data = await apiResponse.json();
      setThreadTitle('');
      setThreadContent('');
      setResponse(JSON.stringify(data));
    }

    
    const styleObj = {
      fontSize: 20,
      color: "white",
      textAlign: "center",
      paddingTop: "20px",
  }

  const styleObjCategoriesThreads = {
      display: "block",
      fontSize: "40px",
      color: "ivory",
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

const textArea1 = {

  width: "25%",
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

  width: "25%",
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



    return (

      
      <div>

        

<p style={{borderBottom: "2px solid",
 borderTop: "2px solid", 
 borderWidth: "10px",
 padding: "5px 3px",
 fontSize: "40px",
 color: "gold",
}}>Create new thread:</p>

<p style={{borderBottomLeftRadius: "120px 70px",
   borderBottomRightRadius:"120px 70px",
   border: "2px solid",
   padding: "5px 3px",
   fontSize: "23px",
   color: "gold"}}>Below you can create a new thread:</p>
        
        <section>
        <label style={{fontSize: "16px", fontWeight: "normal", color: "red"}}>Title: </label><br></br>

            <input style={textArea2} type="text"
            value={threadTitle}
            onChange={(e) => handleOnChange(e)}>
          </input>
        </section>
        <section>
        <label style={{fontSize: "16px", fontWeight: "normal", color: "red"}}>Context: </label><br></br>

          <textarea style={textArea1} type="text" value={threadContent} onChange={(e) => handleContentChange(e)}></textarea>
        </section>

        <button style={button} onClick={() => submitThread()}>Send my thread!</button>
        <h3 style={{paddingTop: "20px", fontSize: "16px", color: "red"}}>Comment from API</h3>      
          <textarea  style={textArea} value={response}></textarea>


      </div>
    )
}

export default PostThread