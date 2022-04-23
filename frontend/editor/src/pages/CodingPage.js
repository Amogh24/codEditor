import {React,useState,useRef, useEffect} from 'react'
import { renderMatches } from 'react-router-dom'
import ACTIONS from '../Actions'
import Client from '../components/Client'
import Editor from '../components/Editor'
import { initSocket } from '../socket'
import {useLocation,useNavigate,Navigate,useParams} from 'react-router-dom'
import { convertLength } from '@mui/material/styles/cssUtils'
import toast from 'react-hot-toast'
function CodingPage() {
    const [clients, setClients] = useState([]);

    const socketRef = useRef(null)
    const location = useLocation()
    const {roomId} = useParams()
    const reactNavigator = useNavigate()
    useEffect(()=>{
        console.log(location.state.username)
        const init = async()=>{
            socketRef.current = await initSocket()
            socketRef.current.on('connect_error',(err)=>HandleErrors(err))
            socketRef.current.on('connect_failed',(err)=>HandleErrors(err))

            function HandleErrors(err){
                console.log('socket error',err)
                toast.error('Socket connection failed, please try again')
                reactNavigator('/')
            }




            socketRef.current.emit(ACTIONS.JOIN,{
                roomId,
                username:location.state?.username,

            }) //we do this instead of using "join" to prevent errors caused due to typos

            //listening for joined event
            socketRef.current.on(ACTIONS.JOINED,({clients,username,socketId})=>{
                if(username!==location.state?.username){
                    toast.success(`${username} joined the room`)
                    
                }
                setClients(clients)
            })
        
    }
        init()
    },[])

if(!location.state)
            {
                return <Navigate to = '/'/>
            }
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