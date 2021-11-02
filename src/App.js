// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import {Chat} from 'stream-chat-react'
import {StreamChat} from 'stream-chat'
import {ChannelContainer,ChannelListContainer,Auth} from './components'
import Cookies from 'universal-cookie';
import 'stream-chat-react/dist/css/index.css';
const cookies = new Cookies();
const apiKey='g8phxdf3z5c7'

const authToken = cookies.get("token");


const client=StreamChat.getInstance(apiKey)

if(authToken) {
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

function App() {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if(!authToken) return <Auth />
  return (
    <div className="app__wrapper">
    <Chat client={client} theme="team light">
   <ChannelListContainer      isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}/>
   <ChannelContainer isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType} />

 </Chat>
    </div>
  );
}

export default App;
