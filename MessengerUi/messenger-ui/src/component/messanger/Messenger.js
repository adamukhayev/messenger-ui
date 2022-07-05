import React, { useState, useCallback, useEffect } from 'react';
import ConversationList from '../conversationList/ConversationList';
import MessageList from '../message-list/MessageList';
import './Messenger.css';
import Toolbar from "../toolbar/Toolbar";
import ToolbarButton from "../toolbarButton/ToolbarButton";
import { Icon } from '@iconify/react';
import callSharp from '@iconify/icons-ion/call-sharp';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import {
  StompSessionProvider,
  useSubscription,
} from "react-stomp-hooks";
import {useSelector} from "react-redux";
// import SockJsClient from 'sockjs-client'

// const  ws = new WebSocket('ws://localhost:8083/app/hello')

export default function Messenger(props) {

  const token = useSelector(state => state.authReducer.token);
  const login = useSelector(state => state.authReducer.username)

  const jwtToken = {
    "username": login
  };

  function SubscribingComponent() {
    const [lastMessage, setLastMessage] = useState("No message received yet");

    console.log("AA ", jwtToken)
    //Subscribe to /topic/test, and use handler for all received messages
    //Note that all subscriptions made through the library are automatically removed when their owning component gets unmounted.
    //If the STOMP connection itself is lost they are however restored on reconnect.
    //You can also supply an array as the first parameter, which will subscribe to all destinations in the array
    useSubscription("/topic/messages", (message) => setLastMessage(message.body));

    return (
        <div>Last Message: {lastMessage}</div>
    );
  }

  return (
      <div>
        <StompSessionProvider
            url={"http://localhost:8083/chat?access_token="+token}
            // headers={ jwtToken }
            //All options supported by @stomp/stompjs can be used here
        >
          <SubscribingComponent />
        </StompSessionProvider>
        {/*<div>*/}
        {/*  <input type="text" id="from" placeholder="Choose a nickname"/>*/}
        {/*</div>*/}
        {/*<br/>*/}
        {/*<div>*/}
        {/*  <button id="connect" onClick={connect}>Connect</button>*/}
        {/*  /!*<button id="disconnect" disabled="disabled" onClick={disconnect}>*!/*/}
        {/*  /!*  Disconnect*!/*/}
        {/*  /!*</button>*!/*/}
        {/*</div>*/}
        {/*<br/>*/}
        {/*<input type="text" id="text" placeholder="Write a message..."/>*/}
        {/*<button id="sendMessage" onClick={sendMessage}>Send</button>*/}
        {/*<p id="response"></p>*/}
        {/*<textarea onChange={(e) => setMesseg(e.currentTarget.value)} value={messeg}></textarea>*/}
        {/*<button onClick={#}>Send</button>*/}
        {/*<button onClick={handleClickChangeSocketUrl}>*/}
        {/*  Click Me to change Socket Url*/}
        {/*</button>*/}
        {/*<button*/}
        {/*    onClick={handleClickSendMessage}*/}
        {/*    disabled={readyState !== ReadyState.OPEN}*/}
        {/*>*/}
        {/*  Click Me to send 'Hello'*/}
        {/*</button>*/}
        {/*<span>The WebSocket is currently {#}</span>*/}
        {/*{lastMessage ? <span>Last message: {lastMessage.data}</span> : null}*/}
        {/*<ul>*/}
        {/*  {messageHistory.map((message, idx) => (*/}
        {/*      <span key={idx}>{message ? message.data : null}</span>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
  );


  // return (
  //     <div className='messenger'>
  //        <Toolbar
  //         title="Messenger"
  //         leftItems={[
  //           <ToolbarButton key="cog" icon="ion-ios-cog" />
  //         ]}
  //         rightItems={[
  //           <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
  //         ]}
  //       />
  //
  //        <Toolbar
  //         title="Conversation Title"
  //         rightItems={[
  //           <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
  //           <ToolbarButton key="video" icon="ion-ios-videocam" />,
  //           <ToolbarButton key="phone" icon="ion-ios-call" />
  //         ]}
  //       />
  //
  //       <div className="scrollable sidebar">
  //         <ConversationList />
  //       </div>
  //
  //       <div className='scrollable content'>
  //         <MessageList />
  //       </div>
  //     </div>
  // );
}