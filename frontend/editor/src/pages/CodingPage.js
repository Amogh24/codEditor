import React from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'
function CodingPage() {
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
              {/* {clients.map((client) => (
                  <Client                         Client component uses react avatar which doesn't work for current version of react
                      key={client.socketId}
                      username={client.username}
                  />
              ))} */}
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