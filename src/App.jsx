
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Count from './Components/Count'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'

function App() {
  

  return (
    <div className='App'>
      {/* <Greet name="Saranga" />
      <Welcome/> */}
      {/* <Message/> */}

      {/* <Count/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
    </div>
  )
}

export default App
