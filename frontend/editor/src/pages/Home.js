import React from 'react';
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
function Home() {
  const navigate= useNavigate();
  const [roomId,setRoomId]=useState('');
  const [username,setUsername]=useState('');
  const createNewRoom=(e)=>{
    e.preventDefault();
    const id= uuidV4();
    setRoomId(id);
    toast.success("Created a new Room");
  };
  const joinRoom = ()=>{
    if(!roomId || !username){
      toast.error('Room ID and user name required');
      return ;
    }
    console.log(username)
    navigate(`/coding/${roomId}`, {
      state: {
          username,
      },
  });
  }
  
  const handleInputEnter=(e)=>{
    if(e.code==='Enter'){
      joinRoom();
      
    }
  }
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='homePageLogo' src='/PRIME-SYNC-BUTTON.jpg' height = "60px" width="60px"></img>
        <h4 className='mainLabel'>Enter Room ID </h4>
        <div className='inputGroup'>
          <input 
          type="text" 
          className='inputBox' 
          placeholder='Room ID'
          onChange={(e)=> setRoomId(e.target.value)}
          value={roomId}
          onKeyUp={handleInputEnter}
          />
          <input 
          type="text" 
          className='inputBox' 
          placeholder='Username'
          onChange={(e)=> setUsername(e.target.value)}
          value={username}
          onKeyUp={handleInputEnter}
          />
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className='createInfo'>
            If you don't have an invite then &nbsp;
            <a onClick={createNewRoom} href="" className='createNewBtn'>New room</a>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Home