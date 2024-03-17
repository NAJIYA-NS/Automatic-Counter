import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function Counter() {

    const [count,setCount]=useState(0)
    const [isPause, setIsPause]=useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
          if (!isPause) {
            setCount(prevCount => prevCount + 1);
          }
        }, 100);
    
        return () => clearInterval(interval);
      }, [isPause]);

const pause=()=>{
    setIsPause(prevPause=>!prevPause)
}

const reset=()=>{
    setCount(0)
    // setIsPause(false)
}

const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  return (
    <div className="row text-center mt-2 bg-body-tertiary mb-5">
    <div className="col-4"></div>
    <div className="col-4 mt-5 p-5">
       <div className="container text-center rounded-6 p-5 border border-3 border-warning" style={{height:260,width:300}}><h2 className='mt-4 text-success'>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h2>
       <MDBBtn  className='btn btn-info text-dark me-3 mt-5' onClick={pause} >Pause</MDBBtn>
       <MDBBtn onClick={reset} className='btn btn-warning text-dark'>Reset</MDBBtn>
       </div>
    </div>
    <div className="col-4"></div>
  </div>
 
  )
}

export default Counter