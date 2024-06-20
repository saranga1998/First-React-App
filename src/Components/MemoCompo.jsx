import React from 'react'

function MemoCompo({name}) {
    console.log('Memo Component')
    return (
    <div>
      {name}
    </div>
    
)
}

export default React.memo(MemoCompo)
