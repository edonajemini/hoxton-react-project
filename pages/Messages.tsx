import React, { useState } from "react";

export function Messages(){
    const [messages, setMessages] = useState([])
    return(
        <div className="message-whole page">
        <div className="messages-page">
            <div className="header-messages">
            <h2>Messages</h2>
        <div className="message-header-images">
            <img src='https://cdn-icons-png.flaticon.com/512/3524/3524636.png' alt='logo-stars' width="20px"/>
            <img src='https://cdn-icons-png.flaticon.com/512/1161/1161779.png' alt='logo-stars' width="20px"/>
            </div>
            </div>
            <div className="text-message">
                <h3>Welcome to your inbox!</h3>
                <p>
                Drop a line, share Tweets and more with private conversations between you and others on Twitter.
                </p>
              
                <form onSubmit={event => {
              event.preventDefault()

              let answer = {
                messages: event.target.text.value,
                name: event.target.name.value
              }
              event.target.reset();
              
              setMessages([...messages, answer])
            }}>
              <div className="write-messages">
              <input type="name" name='name' className='message-mail' placeholder='Who do u want to send this message to' required />
              <textarea name="text" id="costumer-message" rows={3} placeholder="" required>
              </textarea>
              </div>
              <button className="message-btn"  >Write a message</button>
            </form>
            </div>
        </div>
        <div className="write-mesasages">
        
            <ul>
              {messages.map(item => (
                <li className='message-li'>
                  <p>Sent to {item.name}</p>
                  <h5>{item.messages}</h5>
                </li>
              ))}
            </ul>
            
        </div>
        </div>
    )
}