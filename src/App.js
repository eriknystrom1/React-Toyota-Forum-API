import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './toyota-rav4-hybrid-2019-wallpaper.jpg';
import toyota from './375px-Toyota_carlogo.svg.png';





import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

// Imported components
import GetCategories from './components/API Integration/GetCategories'
import PostCategory from './components/API Integration/PostCategory'
import GetThreads from './components/API Integration/GetThreads'
import AboutUs from './components/API Integration/AboutUs'
import SignIn from './components/API Integration/SignIn'




function App() {

  const linkStyle = {
    margin: "20px",
    fontSize: "18px",
    color: "ivory",
    textDecoration: "none",

    
 
  }

  const linkStyle1 = {
    margin: "20px",
    fontSize: "18px",
    color: "ivory",
    textDecoration: "none",

    
 
  }

  const styleObj = {
    fontSize: 40,
    color: "ivory",
    textAlign: "center",
    paddingTop: "100px",

};

  return (
    <div className="App">          

      
        <Router>
          
            <nav style={{padding: "20px", backgroundColor: "darkblue"}}>      
            

                  
                  




                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/categories" style={linkStyle}>See list of categories</Link>
                <Link to="/postcategory" style={linkStyle}>Create a category</Link>
                <Link to="/aboutus" style={linkStyle}>About us</Link>
                <Link to="/signin" style={linkStyle1}>Sign in</Link>

            </nav>
            <Switch>
                <Route exact path="/">                 
               

                  <div style={{ backgroundImage: `url(${Background})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', backgroundAttachment: "fixed",
                  height: '520px', }}>

          <h1 style={styleObj}>Welcome to Toyota Forum</h1>
          <img src={toyota}/>


    </div>
                  
                  
                   
                </Route>
                <Route exact path="/categories" component={GetCategories}/>
                <Route exact path="/postcategory" component={PostCategory}/>
                <Route exact path="/category/:categoryId/thread" component={GetThreads}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/signin" component={SignIn}/>



                <Route exact path="/" />
                {/* <Redirect to="/thread/:threadId/newcomment" component={PostComment}/> */}
            </Switch>
        </Router>
    </div>
    )
}
    
export default App;
