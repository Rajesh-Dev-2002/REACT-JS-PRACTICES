import React, { useState } from 'react'

const App = () => {
  const [change,setChange]= useState("Hello")
  // const change = "hello"
  return (
    
    <>
    <div>
      <input type="text" placeholder='search text' onChange={(e)=>setChange(e.target.value)}  value={change}/>
      {/* // because it is a data one way data binding binding */}
      <button>Submit--{change}</button>
      
    </div>
    </>
  )
}

export default App
