import logo from './logo.svg';
import './Contact.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function Contact() {
    return (
      <div>
        <div class="tab-labels">
 <img src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0" width="30%" hight="80px" align="left"></img>
 <ul class="tab-labels">
    <li class="tab-label" onclick="openTab('tab1')"><i><h3>Home</h3></i></li>
    <li class="tab-label" onclick="openTab('tab2')"><i><h3>User</h3></i></li>
    <li class="tab-label" onclick="openTab('tab3')"><i><h3>Admin</h3></i></li>
  </ul>
</div>
{/* contact us */}
  <div class="text">
  <p>Contact Us</p>
  </div>


  {/* icons */}
  <div>
  <div class="column1">
<img src="https://cdn-icons-png.flaticon.com/128/13/13936.png" heigh="60px" width="60px"></img>
<img src="https://cdn-icons-png.flaticon.com/128/900/900310.png" heigh="60px" width="60px"></img>
<img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png"heigh="60px" width="60px"></img>
   

<img src="https://cdn-icons-png.flaticon.com/128/535/535239.png" heigh="60px" width="60px"></img>
<img src="https://cdn-icons-png.flaticon.com/128/1927/1927656.png" heigh="60px" width="60px"></img>
  </div>
<div class="column2">
 <p>
 (+94) (011) 2869835
 </p>
 </div>
 <div class="column2">
 <p>
 (+94) (011) 2869836
 </p>
 </div>
 <div class="column2">
 <p>
 chamila@arctic.lk/Arctic@sltnet.lk
 </p>
 </div>
 <div class="column2">
 <p>
 27 Perakumba Mawatha,
Sri Jayawardenepura Kotte,sri lanka.
 </p>
 </div>
 <div class="column2">
 <p>
 www.arctic.lk
 </p>
 </div>
 
</div>
<div class="iframe">
<iframe
 src="AIzaSyBERWn4JFQk-B9ZK91LXfuiIFNpuDfZoo4&40.7128,-74.0060" allowfullscreen>
</iframe>
</div>



<div class="tab-labels">

<div class="footer-text">
<p>© 2023 • All Rights Reserved</p>
</div>
</div>
</div>
    );
  }


export default Contact;
