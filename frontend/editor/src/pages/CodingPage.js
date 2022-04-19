import {React,useState,useRef, useEffect} from 'react'
import { renderMatches } from 'react-router-dom'
import ACTIONS from '../Actions'
import Client from '../components/Client'
import Editor from '../components/Editor'
import { initSocket } from '../socket'
import {useLocation} from 'react-router-dom'
function CodingPage() {

    const socketRef = useRef(null)
    useEffect(()=>{
        const init = async()=>{
            socketRef.current = await initSocket()
        //     socketRef.current.emit(ACTIONS.JOIN,{
        //         roomId,
        //         username:location.state?.username

        //     }) //we do this instead of using "join" to prevent errors caused due to typos
            
        // 
    }
        init()
    },[])
    const [clients, setClients] = useState([
    { 
        username:"Amogh Sachdeva",
        socketId:5
    },
    { 
        username:"Akshat Jain",
        socketId:2
    }

]);
  return(
      
<div className="mainWrap">
    
  <div className="aside">
      <div className="asideInner">
          <div className="logo">
              <img
                  className="logoImage"
                  src='/PRIME-SYNC-BUTTON.jpg' height = "60px" width="60px"
                  alt="logo"
              />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
              {clients.map((client) => (
                  <Client                         
                      key={client.socketId}
                      username={client.username}
                  />
              ))}
          </div>
      </div>
      <button className="btn copyBtn" >
          Copy ROOM ID
      </button>
      <button className="btn leaveBtn" >
          Leave
      </button>
  </div>
  <div className="editorWrap">
      <Editor/>
  </div>
</div>
  )
  

}

export default CodingPage