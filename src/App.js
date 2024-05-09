import logo from './logo.svg';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Wp from './wp.png'
import { useEffect, useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   const all_time = document.getElementById("all_time");

  //   const wp = "";
  //   wp.setAttribute("class", "transition")

  // }, [])
  useEffect(() => {
    setShowContent(true);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div >
        <div className={`fade-in ${showContent ? "visible" : ""}`} style={{
          position: "fixed",
          bottom: "20px",
          right: "135px",
        }}>
          <a href='https://wa.me/918320066228' target='_blank' >
            <img src={Wp} width="60px" style={{ backgroundColor: "#fff", borderRadius: "50%" }} />
          </a>
        </div>
      </div>

      <MessengerCustomerChat
        pageId="304588992738316"
        appId="1896806314111034"
      />
    </div>
  );
}

export default App;
