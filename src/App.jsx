
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Count from './Components/Count'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGretting from './Components/UserGretting'
import NameList from './Components/NameList'
import PersonList from './Components/PersonList'
import Form from './Components/Form'
import LifeCycleA from './Components/LifeCycleA'
import FragmentDemo from './Components/FragmentDemo'
import Table from './Components/TableA'
import TableA from './Components/TableA'
import ParentAComponent from './Components/ParentAComponent'
import RefsDemo from './Components/RefsDemo'
import FocusInput from './Components/FocusInput'
import FRParentInput from './Components/FRParentInput'
import PortalDemo from './Components/PortalDemo'
import Hero from './Components/Hero'
import ErrorBoundry from './Components/ErrorBoundry'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import ClickCounterTwo from './Components/ClickCounterTwo'
import HoverCounterTwo from './Components/HoverCounterTwo'
import User from './Components/User'
import Counter from './Components/Counter'
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
      {/* <ParentComponent/> */}

      {/* <UserGretting/> */}

      {/* <NameList/> */}
      {/* <PersonList/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}

      {/* <FragmentDemo/> */}
      {/* <TableA/> */}
      {/* <PureComponent/> */}
      {/* <ParentAComponent/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <Hero heroname="Batman"/> */}
      {/* <ErrorBoundry>
        <Hero heroname="Joker"/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroname="Batman"/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroname="Superman"/>
      </ErrorBoundry> */}

      {/* <ClickCounter name="Saranga"/>
      <HoverCounter/> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn ?"Saranga":"Guest"}/> */}
      
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count,incrementCount ) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}
      </Counter>
    </div>
  )
}

export default App
