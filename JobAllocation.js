import logo from './logo.svg';
import './JobAllocation.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function JobAllocation() {
    return (
      <div>


        {/* header */}
<div class="tab-labels"></div>
        
        <div class="title">
   Job Allocation
        </div>
        


  {/* tabs */}
  <div class="tab">
  <div class="content">
    Job ID
 </div></div>
 <div class="tab">
  <div class="content">
   User_Group_ID
 </div></div>
 <div class="tab">
  <div class="content">
Location
 </div></div>
 <div class="tab">
  <div class="content">
Vehicle No
 </div></div>
 <div class="tab">
  <div class="content">
Job Details
 </div></div>
  


{/* button */}
 <div class="button">
  <button type="submit" value="submit">Allocate Job</button>
 </div>


              {/* footer */}
              <footer className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </footer>
    </div>

);
  }


export default JobAllocation;