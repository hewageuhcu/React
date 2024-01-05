import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Browser,Router,Route,Switch} from 'react-router-dom';
import Contact from './Contact';
// import { Route, Routes,Switch } from 'react-router-dom';
// import { Link, Router } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router-dom';


// function App() {
//   return (

//     <div >
// {/* routing */}
//  <Router>
// <Link to ='/Contact'>Contact</Link> 
//     <div>
//      <switch>
//         <Route exact path="/">
//           <App/>
//          </Route>
//         <Route path="./Contact">
//       <Contact/>
//         </Route>
//         </switch>
// </div>
//   </Router>  

//   {/* tabs */}
//       <img src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0" width="30%" hight="80px" align="left"></img>
//      <ul class="tab-labels">
//     <li class="tab-label" onclick="openTab('tab1')"><i><h3>Home</h3></i></li>
//     <li class="tab-label" onclick="openTab('tab2')"><i><h3>User</h3></i></li>
//     <li class="tab-label" onclick="openTab('tab3')"><i><h3>Admin</h3></i></li>
//     <li class="tab-label" onclick="openTab('tab3')"><i>Contact Us</i></li>
//   </ul>

function App() {
  
  return (
    <div>
      // <Router>
     
       
      //       <Route exact path="/" element={<App/>}>           
      //       </Route>
      //       {/* <Route path="" element={<Contact/>}>
             
      //       </Route> */}
          
       
      // </Router> 

      {/* tabs */}
      <img src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0" width="30%" height="80px" align="left"></img>
      <ul className="tab-labels">
        <li className="tab-label" ><i><h3>Home</h3></i></li>
        <li className="tab-label" ><i><h3>User</h3></i></li>
        <li className="tab-label" ><i><h3>Admin</h3></i></li>
        <li className="tab-label"><i>Contact Us</i></li>
      </ul>

  <div id="tab1" class="tab">
    <h2>Content for Tab 1</h2>
    <p>This is the content for Tab 1.</p>
  </div>
  
  <div id="tab2" class="tab">
    <h2>Content for Tab 2</h2>
    <p>This is the content for Tab 2.</p>
  </div>
  
  <div id="tab3" class="tab">
    <h2>Content for Tab 3</h2>
    <p>This is the content for Tab 3.</p>
  </div>
  
  {/* contact us */}
  <div id="tab4" class="tab">

    </div>


 {/* wallpaper */}
  <div>
  
  <img src="https://www.bowersoxair.com/wp-content/uploads/2019/06/airconditionertrends-1.jpeg" width="100%" height="500px"></img>
  {/* buttons on the wallpaper */}
 <div class="circular-button1">
 
</div>
<div class="circular-button2">
 
</div>
<div class="circular-button3">
 
 
</div> 

  <div class="text-overlay">
      <p>
       <i>Keeping You Cool,  <br/> Every Breath,<br/>Every Beat.</i> 
      </p>
    </div>
    </div>

    <div class="social">
      <p>Follow Us On Socail Media</p>
    </div> 

    <div class="columns">
    <div class="column">
    <img src="https://th.bing.com/th?id=OIP.VMVTJwYYn2OmMGPYu2TdGQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" height="80px" width="80px" align="right" ></img>
    </div>
   
     

  <div class="column">

  <img src="https://th.bing.com/th?id=OIP.d9YMY3jpZr_ZxliOr3xMYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" height="80px" width="80px" ></img>
  </div>
 

   </div> 

<ul class="tab-labels">
    <div class="footer-text"> 
    <p>© 2023 • All Rights Reserved</p>
    </div>
   </ul>




   

   

</div>
  );
   
  }

export default App;
