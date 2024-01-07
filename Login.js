import logo from './logo.svg';
import './Login.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function Login() {
    return (
      <div>


       <div class="tab-labels"></div>

       <div >
  <p><h4><center>Sign in to your account</center></h4></p>
</div>
       <div class="text">
        Sign in
       </div>
<br/>

       <div class="box">

<div class="box-content">
<div class="form">
        <form action="/submit_form" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="userName" required /><br/><br/>
          <label htmlFor="pwd">Password:</label>
          <input type="password" id="pwd" name="password" required /><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
      </div>
      

{/* create account */}

<div >
  <p><h4><center>Don't have an account yet? Create one!</center></h4></p>
</div>
<div class="text">
       Create Account
       </div>
       <br/>
<div class="box1">
<div class="box-content1">
<div class="form">
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
      </div>
      </div>
      </div>
      {/* forget password */}
      <div >
  <p><h4><center>Forget Password? Reset</center></h4></p>
</div>
<div class="box">
<div class="box-content">
<div class="form"></div>
<div class="form">
        <form action="/submit_form" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="userName" required /><br/><br/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="emaild" required /><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
      </div>
      
      {/* footer */}

      <ul class="footer">
    <div class="footer-text"> 
    <p>© 2023 • All Rights Reserved</p>
    </div>
   </ul>


</div>
    );
  }


export default Login;
