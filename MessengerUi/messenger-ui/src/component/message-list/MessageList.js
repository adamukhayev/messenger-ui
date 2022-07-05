import React, {useEffect, useState} from 'react';
import Compose from '../compose/Compose';
import Toolbar from '../toolbar/Toolbar';
import ToolbarButton from '../toolbarButton/ToolbarButton';
import Message from '../message/Message';
import moment from 'moment';
import { Icon } from '@iconify/react';
import callSharp from '@iconify/icons-ion/call-sharp';
import videocamIcon from '@iconify/icons-ion/videocam';

import baselineAddAPhoto from '@iconify/icons-ic/baseline-add-a-photo';
import send28Filled from '@iconify/icons-fluent/send-28-filled';
import imagePlus from '@iconify/icons-cil/image-plus';
import microphoneAlt from '@iconify/icons-bxs/microphone-alt';
import emoji48Filled from '@iconify/icons-fluent/emoji-48-filled';
import errorOutline from '@iconify/icons-ci/error-outline';
import  './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])


  const getMessages = () => {
    var tempMessages = [
      {
        id: 1,
        author: 'apple',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 2,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 3,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 4,
        author: 'apple',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 5,
        author: 'apple',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 6,
        author: 'apple',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 7,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 8,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 9,
        author: 'apple',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 10,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
    ]
    setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
          <Message
              key={i}
              isMine={isMine}
              startsSequence={startsSequence}
              endsSequence={endsSequence}
              showTimestamp={showTimestamp}
              data={current}
          />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  return(
      <div className='message-list-container'>
        <Toolbar
            title="Conversation Title"
            rightItems={[
              <Icon icon={errorOutline} color="blue" width="30" height="30"  style={{marginLeft: 10}}/>,
              <Icon icon={videocamIcon} color="blue" width="30" height="30" style={{marginLeft: 10}} />,
              <Icon icon={callSharp} color="blue" width="30" height="30" style={{marginLeft: 10}} />
            ]}
        />

        <div className='message-list-container'>{renderMessages()}</div>

        <Compose rightItems={[
          <Icon icon={send28Filled} color="blue" width="25" height="25" style={{marginLeft: 10}}/>,
          <Icon icon={baselineAddAPhoto} color="blue" width="25" height="25" style={{marginLeft: 10}} />,
          <Icon icon={imagePlus} color="blue" width="25" height="25" style={{marginLeft: 10}} />,
          <Icon icon={microphoneAlt} color="blue" width="25" height="25" style={{marginLeft: 10}}/>,
          <Icon icon={emoji48Filled} color="blue" width="25" height="25" style={{marginLeft: 10}} />
        ]}/>
      </div>
  );
}