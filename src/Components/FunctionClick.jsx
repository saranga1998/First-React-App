import React from 'react'

function FunctionClick() {

    function clickHandeler() {
        console.log('Button clicked')
    }
  return (
    <div>
      <button onClick={clickHandeler}>Click me</button>
    </div>
  )
}

export default FunctionClick


//rfce