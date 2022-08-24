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
                <button className="message-btn"  >Write a message</button>
            </div>
        </div>
        <div className="write-mesasages">
        <form onSubmit={event => {
              event.preventDefault()

              let answer = {
                messages: event.target.text.value,
                email: event.target.email.value
              }
              event.target.reset();
              
              setMessages([...messages, answer])
            }}>
              <input type="email" name='email' className='message-mail' placeholder='Please enter the email u want to send this message to!' required />
              <textarea name="text" id="costumer-message" rows={5} placeholder="Leave your message here!" required>
              </textarea>
              <button className='message-submit-btn'>
                Submit
              </button>
            </form>
        </div>
        </div>
    )
}