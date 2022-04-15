import React from 'react'
function Home() {
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img src='/PRIME-SYNC-BUTTON.jpg' height = "60px" width="60px"></img>
        <h4 className='mainLabel'>Enter Room ID </h4>
        <div className='inputGroup'>
          <input 
          type="text" 
          className='inputBox' 
          placeholder='Room ID'
          />
          <input 
          type="text" 
          className='inputBox' 
          placeholder='Username'
          />
          <button className='btn joinBtn'>Join</button>
          <span className='createInfo'>
            If you don't have an invite then &nbsp;
            <a href="" className='createNewBtn'>New room</a>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Home