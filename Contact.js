import logo from './logo.svg';
import './Contact.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function Contact() {
    return (
        <div class="tab-labels">
 <img src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0" width="30%" hight="80px" align="left"></img>
 <ul class="tab-labels">
    <li class="tab-label" onclick="openTab('tab1')"><i><h3>Home</h3></i></li>
    <li class="tab-label" onclick="openTab('tab2')"><i><h3>User</h3></i></li>
    <li class="tab-label" onclick="openTab('tab3')"><i><h3>Admin</h3></i></li>
  </ul>
</div>
    );
  }

export default Contact;
