import React from "react";

const Sidepanel = (props) => {
    <div id="sidepanel">
    <div id="profile">
        <div className="wrap">
            <img id="profile-img" src="bgfb"></img>
            <p>soufiane</p>
            <i className="fa fa-chevron-down expand-button" aria-hidden="true">
            </i>
            <div id="status-options">
                <ul>
                    <li id="status-online" className="active"><span className="status"></span></li>
                    <li id="status-away" className="status-circle"><span className="status"></span></li>
                    <li id="status-busy" className="status-circle"><span className="status"></span></li>
                    <li id="status-offline" className="status-circle"><span className="status"></span></li>
                </ul>
                </div>
                <div id="expanded">
                    <label htmlFor="twitter"></label>
                     <input name="twitter" type="text" value="abdelmoula" />
                     <label htmlFor="twitter"></label>
                     <input name="twitter" type="text" value="soufiane" />
                     <label htmlFor="twitter"></label>
                     <input name="twitter" type="text" value="soufiane.abdelmoula" />
                </div>
    </div>
     
     </div>
     <div id="search">
         <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
         <input type="text" placecholder="Search contacts.."/>
     </div>
     <div id="contacts">
         <ul>
             <li className="contacts">
                 <div className="wrap">
                 <span className="contact-status online"></span>
                 <img src="http://emilcarlsson.se/assets/ltt.png">
                 </img>
                 <div className="meta">
                 <p className="name">Achraf Zakraf</p>
                 <p className="preview">tp</p>
                 </div>
                 </div>
             </li>
             <li className="contact active">
                 <div className="wrap">
                     <span className="contact-status-busy"></span>
                 <img src="http://emilcarlsson.se/assets/louislitt.png">
                 </img>
                 <div className="meta">
                     <p className="name">SOUFIANE ABDELMOULA</p>
                     <p className="preview">wrong</p>
                 </div>
                 </div>
             </li>
         </ul>
         
     </div>
     <div id="bottom-bar">
         <button id="addcontact"><i className="fa fa-user-plus fa-fw"></i></button>
         <button id="settings"><i className="fa fa-cog fa-fw"></i></button>

     </div>
     </div>
}

export default Sidepanel;