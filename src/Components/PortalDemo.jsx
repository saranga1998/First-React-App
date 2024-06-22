import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
  return ReactDom.createPortal(
    <div>
       Portal demo
    </div>,
    document.getElementById('Portal-root')
  )
}

export default PortalDemo
