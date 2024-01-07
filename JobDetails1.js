import logo from './logo.svg';
import './JobDetails1.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function JobDetails1() {
    return (
      <div>


        {/* header */}
<div class="tab-labels"></div>
        
        <div class="title">
          Job Details
        </div>

        {/* search bar */}
        <div class="column2">
        
        <form action="/search" method="get">
  <input type="text" placeholder="Search..." name="search" />
  <button type="submit">Search</button>
</form>
</div>
       

{/* dropdown menu */}
<div class="column1">
<div class="dropdown">
  <button class="dropbtn">Filter By</button>
  <div class="dropdown-content">
    <a href="#Customer">Customer</a>
    <a href="#Date">Date</a>
    <a href="#Team Member">Team Member</a>
    <a href="#Vehicle Number">Vehicle Number</a>
    <a href="#To Be Invoiced">To Be Invoiced</a>
    <a href="#Invoiced">Invoiced</a>

  </div>
  </div>
  </div>

  {/* tabs */}
  {/* here, job id s should be displayed. that id s must come within the database. so after connecting the database, write the relevent code. */}
  <div class="tabs"></div>
  <div class="tabs"></div>
  <div class="tabs"></div>
  <div class="tabs"></div>
  <div class="tabs"></div>
  <div class="tabs"></div>
  <div class="tabs"></div>
<br/>
  
 <div class="column1">
  <button type="submit" value="submit">Add a New Job</button>
 </div>
 <div class="column2">
  <button type="submit" value="submit">Allocate Job</button>
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


export default JobDetails1;
