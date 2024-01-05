import logo from './logo.svg';
import './Login.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function Contact() {
    return (
      <div>


       <div class="tab-labels"></div>

       <div >
  <p><h4>Sign in to your account</h4></p>
</div>
       <div class="text">
        Sign in
       </div>



<div class="form">
        <form action="/submit_form" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="userName" required /><br/><br/>
          <label htmlFor="pwd">Password:</label>
          <input type="password" id="pwd" name="password" required /><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>


      {/* forget password */}
      <div >
  <p><h4>Forget Password? Reset</h4></p>
</div>
<div class="form">
        <form action="/submit_form" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="userName" required /><br/><br/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="emaild" required /><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div >
  <p><h4>Don't have an account yet? Create one!</h4></p>
</div>

<div class="text">
       Create Account
       </div>

{/* create account */}
       <div class="form">
        <form action="/submit_form" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="userName" required /><br/><br/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" required /><br/><br/>
          <label htmlFor="des">Designation:</label>
          <input type="text" id="des" name="des" required /><br/><br/>
          <label htmlFor="pwd">Password:</label>
          <input type="password" id="pwd" name="password" required /><br/><br/>
          <label htmlFor="pwd">Confirm Password:</label>
          <input type="password" id="pwd" name="password" required /><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      {/* forget password */}
      
      {/* footer */}

      <ul class="footer">
    <div class="footer-text"> 
    <p>© 2023 • All Rights Reserved</p>
    </div>
   </ul>


</div>
    );
  }


export default Contact;
