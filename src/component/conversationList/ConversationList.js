import React, {useEffect, useState} from 'react';
import ConversationSearch from '../conversationSearch/ConversationSearch';
import ConversationListItem from '../conversationListItem/ConversationListItem';
import Toolbar from '../toolbar/Toolbar';
import axios from 'axios';
import {Icon} from '@iconify/react';
import settingsOutline from '@iconify/icons-ion/settings-outline';
import duplicateOutline from '@iconify/icons-ion/duplicate-outline';
import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  }, [])

  const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=5').then(response => {
      let newConversations = response.data.results.map(result => {
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: 'Hello world! This is a long message that needs to be truncated.'
        };
      });
      setConversations([...conversations, ...newConversations])
    });
  }

  return (
      <div className='conversation-list'>
        <Toolbar
            title="Messenger"
            leftItems={[
              <Icon icon={settingsOutline} color="blue" width="20" height="20"/>
            ]}
            rightItems={[
              <Icon icon={duplicateOutline} color="blue" width="20"
                    height="20"/>
            ]}
        />
        <ConversationSearch/>
        {
          conversations.map(conversation =>
              <ConversationListItem
                  key={conversation.name}
                  data={conversation}
              />
          )
        }
      </div>
  );
}