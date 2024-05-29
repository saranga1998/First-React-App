import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.GreetHandler('Child')}>Click Me</button>
    </div>
  )
}

export default ChildComponent
