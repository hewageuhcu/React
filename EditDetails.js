import logo from './logo.svg';
import './EditDetails.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function EditDetails() {
    return (
      <div>


        {/* header */}
<div class="tab-labels"></div>
        
        <div class="title">
   Job Details
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
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/159/159469.png" width="30px" height="30px" ></img>
  <div class="content">Item Issue</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"width="30px" height="30px"></img>  <div class="content">Customer Details</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"width="30px" height="30px"></img> <div class="content">Employee Details</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/535/535239.png"width="30px" height="30px"></img><div class="content">Location</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/2652/2652218.png"width="30px" height="30px"></img><div class="content">Item</div></div>

{/* button */}
 <div class="button">
  <button type="submit" value="submit">Edit Details</button>
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


export default EditDetails;