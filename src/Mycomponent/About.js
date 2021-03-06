import React from "react";
function About(){
    return(
        <div>
  {/* Side Navigation */}
  <nav className="w3-sidebar w3-bar-block w3-collapse w3-white w3-animate-left w3-card" style={{zIndex: 3, width: '320px'}} id="mySidebar">
    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom w3-large"><img src="./images/m.png" style={{width: '60%'}} /></a>
    <a href="javascript:void(0)" onclick="w3_close()" title="Close Sidemenu" className="w3-bar-item w3-button w3-hide-large w3-large">Close <i className="fa fa-remove" /></a>
    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align" onclick="document.getElementById('id01').style.display='block'">New Message <i className="w3-padding fa fa-pencil" /></a>
    <a id="myBtn" onclick="myFunc('Demo1')" href="javascript:void(0)" className="w3-bar-item w3-button"><i className="fa fa-inbox w3-margin-right" />Inbox (3)<i className="fa fa-caret-down w3-margin-left" /></a>
    <div id="Demo1" className="w3-hide w3-animate-left">
      <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" onclick="openMail('Borge');w3_close();" id="firstTab">
        <div className="w3-container">
          <img src="./images/port.png" style={{width: '15%'}} /><span className="w3-opacity w3-large">Borge Refsnes</span>
          <h6>Subject: Remember Me</h6>
          <p>Hello, i just wanted to let you know that i'll be home at...</p>
        </div>
      </a>
      <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" onclick="openMail('Jane');w3_close();">
        <div className="w3-container">
          <img className="w3-round w3-margin-right" src="/w3images/avatar5.png" style={{width: '15%'}} /><span className="w3-opacity w3-large">Ashik Ahmed</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </a>
      <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" onclick="openMail('John');w3_close();">
        <div className="w3-container">
          <img className="w3-round w3-margin-right" src="./images/m.png" style={{width: '15%'}} /><span className="w3-opacity w3-large">Ashik Ahmed</span>
          <p>Welcome!</p>
        </div>
      </a>
    </div>
    <a href="#" className="w3-bar-item w3-button"><i className="fa fa-paper-plane w3-margin-right" />Sent</a>
    <a href="#" className="w3-bar-item w3-button"><i className="fa fa-hourglass-end w3-margin-right" />Drafts</a>
    <a href="#" className="w3-bar-item w3-button"><i className="fa fa-trash w3-margin-right" />Trash</a>
  </nav>
  {/* Modal that pops up when you click on "New Message" */}
  <div id="id01" className="w3-modal" style={{zIndex: 4}}>
    <div className="w3-modal-content w3-animate-zoom">
      <div className="w3-container w3-padding w3-red">
        <span onclick="document.getElementById('id01').style.display='none'" className="w3-button w3-red w3-right w3-xxlarge"><i className="fa fa-remove" /></span>
        <h2>Send Mail</h2>
      </div>
      <div className="w3-panel">
        <label>To</label>
        <input className="w3-input w3-border w3-margin-bottom" type="text" />
        <label>From</label>
        <input className="w3-input w3-border w3-margin-bottom" type="text" />
        <label>Subject</label>
        <input className="w3-input w3-border w3-margin-bottom" type="text" />
        <input className="w3-input w3-border w3-margin-bottom" style={{height: '150px'}} placeholder="What's on your mind?" />
        <div className="w3-section">
          <a className="w3-button w3-red" onclick="document.getElementById('id01').style.display='none'">Cancel &nbsp;<i className="fa fa-remove" /></a>
          <a className="w3-button w3-light-grey w3-right" onclick="document.getElementById('id01').style.display='none'">Send &nbsp;<i className="fa fa-paper-plane" /></a> 
        </div>    
      </div>
    </div>
  </div>
  {/* Overlay effect when opening the side navigation on small screens */}
  <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: 'pointer'}} title="Close Sidemenu" id="myOverlay" />
  {/* Page content */}
  <div className="w3-main" style={{marginLeft: '320px'}}>
    <i className="fa fa-bars w3-button w3-white w3-hide-large w3-xlarge w3-margin-left w3-margin-top" onclick="w3_open()" />
    <a href="javascript:void(0)" className="w3-hide-large w3-red w3-button w3-right w3-margin-top w3-margin-right" onclick="document.getElementById('id01').style.display='block'"><i className="fa fa-pencil" /></a>
    <div id="Borge" className="w3-container person">
      <br />
      <img className="w3-round  w3-animate-top" src="/w3images/avatar3.png" style={{width: '20%'}} />
      <h5 className="w3-opacity">Subject: Remember Me</h5>
      <h4><i className="fa fa-clock-o" /> From Borge Refsnes, Sep 27, 2015.</h4>
      <a className="w3-button w3-light-grey" href="#">Reply<i className="w3-margin-left fa fa-mail-reply" /></a>
      <a className="w3-button w3-light-grey" href="#">Forward<i className="w3-margin-left fa fa-arrow-right" /></a>
      <hr />
      <p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Best Regards, <br />Borge Refsnes</p>
    </div>
    <div id="Jane" className="w3-container person">
      <br />
      <img className="w3-round w3-animate-top" src="./images/port.png" style={{width: '20%'}} />
      <h5 className="w3-opacity">Subject: None</h5>
      <h4><i className="fa fa-clock-o" /> From ASHIK, oct 25, 2000.</h4>
      <a className="w3-button w3-light-grey">Reply<i className="w3-margin-left fa fa-mail-reply" /></a>
      <a className="w3-button w3-light-grey">Forward<i className="w3-margin-left fa fa-arrow-right" /></a>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Forever yours,<br />ASHIK</p>
    </div>
    <div id="John" className="w3-container person">
      <br />
      <img className="w3-round w3-animate-top" src="./images/m.png" style={{width: '20%'}} />
      <h5 className="w3-opacity">Subject: None</h5>
      <h4><i className="fa fa-clock-o" /> From John Doe, Sep 23, 2015.</h4>
      <a className="w3-button w3-light-grey">Reply<i className="w3-margin-left fa fa-mail-reply" /></a>
      <a className="w3-button w3-light-grey">Forward<i className="w3-margin-left fa fa-arrow-right" /></a>
      <hr />
      <p>Welcome.</p>
      <p>That's it!</p>
    </div>
  </div>
</div>

    )
}
export default About;