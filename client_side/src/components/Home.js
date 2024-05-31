import React from 'react'

function Home() {
  return (
    <div className='home'>
       <video autoPlay muted loop width={'100%'} height={'auto'}>
    <source src="./home.mp4" type="video/mp4"/>
    </video>
    
    </div>
  )
}

export default Home