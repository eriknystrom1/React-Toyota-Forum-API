import React from 'react';
import Background from './toyota-rav4-hybrid-2019-wallpaper.jpg';

 
const home = () => {

    
    const styleObj = {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        paddingTop: "20px",
    }
  
    const styleObjCategoriesThreads = {
        fontSize: "40px",
        color: "ivory",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "50px"

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
        padding: "15px 55px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        borderRadius: "8px",
        transitionDuration: "0.4s",
        cursor: "pointer",
        margin: "15px"
  
    }

    const button1 = {
        backgroundColor: "blue",
        border: "none",
        color: "white",
        padding: "15px 60px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        borderRadius: "8px",
        transitionDuration: "0.4s",
        cursor: "pointer",
        margin: "15px"
  
    }
    
    const textArea = {
  
      width: "30%",
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
  
    width: "30%",
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
  
    width: "30%",
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

        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundAttachment: "fixed",
        height: '520px', }}>

            <h3 style={styleObjCategoriesThreads}>Sign in:</h3><br></br>

            <button style={button1}>Login</button>
            <button style={button}>Register</button>



       </div>
    
    );
}
 
export default home;