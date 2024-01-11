import logo from './logo.svg';
import './EditOptionPage.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function EditOptionPage() {
    return (
      <div>


        {/* header */}
<div class="tab-labels"></div>
        
        <div class="title">
   Edit Job Details
        </div>
        <div class="dropdown">
  <button class="dropbtn">Job ID</button>
  <div class="dropdown-content">

    {/* this ID s should be come from the enterd data */}
    <a href="#Customer">ID1</a>
    <a href="#Date">ID2</a>
    <a href="#Team Member">ID3</a>
    <a href="#Vehicle Number">ID4</a>
    <a href="#To Be Invoiced">ID5</a>
    <a href="#Invoiced">ID6</a>
</div>
  </div>


  {/* tabs */}
  <div class="tab">
  <div class="content">
    {/* Form */}
<div>
<form action="/submit_form_endpoint" method="post">
          <label htmlFor="name">Item Issue:</label><br />
          <input type="text" id="name" name="name"  required /><br /><br />

          <label htmlFor="email">Customer ID:</label><br />
          <input type="number" id="email" name="email" required /><br /><br />

          <label htmlFor="message">Employee Email:</label><br />
          <textarea id="email" name="message"  required></textarea><br /><br />
          <label htmlFor="message">Location:</label><br />
          <textarea id="message" name="message"  required></textarea><br /><br />
          <label htmlFor="message">Item:</label><br />
          <textarea id="message" name="message"  required></textarea><br /><br />

         
        </form>
      </div></div></div>
  


{/* button */}
 <div class="button">
  <button type="submit" value="submit">Save</button>
 </div>


              {/* footer */}
 <div class="footer">
  <div class="footer-text">
  <p>© 2023 • All Rights Reserved</p>
  </div>
 </div>
</div>
);
  }


export default EditOptionPage;