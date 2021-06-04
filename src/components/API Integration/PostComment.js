import React, { useState } from 'react'

const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const PostComment = ({id}) => {

    const postCommentURL = `${baseURL}/thread/${id}/comment`

    const [commentTitle, setCommentTitle] = useState('');
    const [commentContent, setCommentContent] = useState('');

    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
        setCommentTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setCommentContent(e.target.value);
    }

    const submitComment = async () => {
      const requestBody = {
        "title": commentTitle,
        "content": commentContent
      };

      const apiResponse = await fetch(postCommentURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(requestBody)
      });
      
      const data = await apiResponse.json();
      setCommentTitle('');
      setCommentContent('');
      setResponse(JSON.stringify(data));
    }

    
    const styleObj = {
      fontSize: 30,
      color: "red",
      textAlign: "center",
      paddingTop: "20px",
      fontWeight: "normal"
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
      cursor: "pointer"

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

        <p style={styleObj}>Add a comment:</p>

        <section>
          <label style={{fontSize: "16px", fontWeight: "normal"}}>Title: </label><br></br>
          <input style={textArea2} type="text"
            value={commentTitle}
            onChange={(e) => handleOnChange(e)}>
          </input>
        </section>
        <section>
        <label style={{fontSize: "16px", fontWeight: "normal",}}>Context: </label><br></br>
          <textarea style={textArea1} type="text" value={commentContent} onChange={(e) => handleContentChange(e)}></textarea>
        </section>
        <button style={button} onClick={() => submitComment()}>Send</button>
        <h3 style={{paddingTop: "20px", fontSize: "16px", fontWeight: "normal"}}>Comment from API:</h3>
        <textarea style={textArea} value={response}></textarea>
      </div>
    )
}

export default PostComment