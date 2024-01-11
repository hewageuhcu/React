import logo from './logo.svg';
import './JobList.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function JobList() {
    return (
      <div>


        {/* header */}
<div class="tab-labels"></div>
        
        <div class="title">
 Job List
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
  <div class="tab">
  <div class="content">
    {/* Job IDs should be get from the saved data. plz write the relevent codes after connect database.*/}
 </div></div>
 <div class="tab">
  <div class="content">
   {/* User_Group_ID */}
 </div></div>
 <div class="tab">
  <div class="content">
{/* Location */}
 </div></div>
 <div class="tab">
  <div class="content">
{/* Vehicle No */}
 </div></div>
 <div class="tab">
  <div class="content">
{/* Job Details */}
 </div></div>
  




              {/* footer */}
              <footer className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </footer>
    </div>

);
  }


export default JobList;