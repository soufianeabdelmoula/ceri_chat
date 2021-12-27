import React from "react";
import WebSocketInstance from "../websocket";

class Chat extends React.Component {
     
    constructor(props) {
        super(props)
        this.state = {}

        this.waitForSocketConnection(() => {
            WebSocketInstance.addCallbacks(
                this.setMessages.bind(this),
                this.addMessage.bind(this));
                WebSocketInstance.fetchMessage(this.props.cirrentUser);

        });
    }

    waitForSocketConnection(callback) {
        const component = this;
        const socket = this.socketRef;
       // const recursion = this.waitForSocketConnection;
        setTimeout(
            function(){
                if (WebSocketInstance.state() === 1) {
                    console.log('Connection secure')
                        callback();        
                    return;
                } else {
                    console.log('waiting.....');
                    component.waitForSocketConnection(callback);
                }
            },100
        );
    }

    addMessage(message){
        this.setState({
            messages: [...this.state.messages, message]
        });
    }
    
    
    setMessages(messages){
        this.setState({
            messages: messages.reverse()
        });
    }

    renderMessages = messages => {
        const currentUser = 'admin';
        return (message => (
          <li
            key={message.id}
            className={message.author === currentUser ? "sent" : "replies"}
          >
            <img
              src="http://emilcarlsson.se/assets/mikeross.png"/>
            <p>
              {message.content}
            </p>
          </li>
        ));
      };

    render(){
        const messages = this.state.messages;
        return(
            <div id="frame">
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
                <div className="content">
                    <div className="contact-profile">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png"></img>
                        <p>username</p>
                        <div className="social-media">
                            <i className="fa fa-facebook"area-hidden="true"></i>
                            <i className="fa fa-twitter"area-hidden="true"></i>
                            <i className="fa fa-instagram"area-hidden="true"></i>
                        </div>
                    </div>
                    <div className="messages">
                        <ul id="chat-log">
                            {
                                messages && 
                                this.renderMessages(messages)
                            }
                      
                        </ul>
                    </div>
                    <div className="message-input">
                        <div className="wrap">
                            <input id="chat-message-input" type="text" placecholder="ecriture"></input>
                            <i className="fa fa-paperclip attachement" aria-hidden="true"></i>
                            <button id="chat-message-submit" className="submit">
                                <p className="fa fa-paper-plane" aria-hidden="true"></p>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
   
        )
    }
}
 

export default Chat;