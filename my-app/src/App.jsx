import logo from './logo.svg';
import './App.css';
import email_icon from '../src/Assets/email.png';
import password_icon from '../src/Assets/password.png';
import person_icon from '../src/Assets/person.png';
import Navbar from './Navbar';

function App() {
  return (
    <div className='nav'>
      {/* <Navbar />  */}
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
}

export default App;
