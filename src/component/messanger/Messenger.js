import React, {useEffect, useState} from 'react';
import './Messenger.css';
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'
import {useSelector} from "react-redux";

let stompClient = null

let text = '';
export default function Messenger(props) {
  const username = useSelector(state => state.authReducer.username);
  const [mess, setMessages] = useState([])
  const [text, setText] = useState('')
  const handlers = []

  useEffect(() => {
    let socket = new SockJS("http://localhost:8082/chat")
    stompClient = Stomp.over(socket)
    console.log(' CONNECT ', stompClient.connected)
    stompClient.connect({}, frame => {
      stompClient.subscribe('/topic', message => {
        console.log("frame : ", message.body)
        let newMessage = JSON.parse(message.body)
        setMessages((preyMessage) => [...preyMessage, newMessage])
      })
    })
  }, [])

  const messageOnchange = (e) => {
    setText(e.target.value)
  }

  const sendMessage = () => {
    if (text !== '') {
      stompClient.send("/chat", {}, JSON.stringify({
        author: username,
        text: text,
        url: 'https://placehold.jp/3d4070/ffffff/50x50.png'
      }))
      setText('');
    }
    setText('');
  }

  return (
      <div>
        <div>
          <div>
            <div>
              <div style={{height: "400px", overflowY: "auto"}}>
                {mess.map(m => <div>
                  <img src={m.url}/>
                  <ul>{m.author}</ul>
                  <br/>
                  {m.text}
                  <hr/>
                </div>)}
              </div>
              <div>
                <div>
                  <textarea value={text} onChange={messageOnchange}></textarea>
                </div>
                <div>
                  <button onClick={sendMessage}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}