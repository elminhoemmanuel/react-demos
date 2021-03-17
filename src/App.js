import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheets from "./components/Stylesheets"; 
import Inline from "./components/Inline"; 
import Form from "./components/Form"; 
import LifecycleA from "./components/LifecycleA"; 
import FragmentDemo from "./components/FragmentDemo"; 
import Table from "./components/Table"; 
import RefsDemo from "./components/RefsDemo"; 
import FocusInput from "./components/FocusInput"; 
import FRparent from "./components/FRparent"; 
import PortalDemo from "./components/PortalDemo"; 
import Hero from "./components/Hero"; 
import ErrorHandler from "./components/ErrorHandler"; 
import ClickCounter from "./components/ClickCounter"; 
import HoverCounter from "./components/HoverCounter"; 
import User from "./components/User"; 
import Counter2 from "./components/Counter2"; 
import ClickCounter2 from "./components/ClickCounter2"; 
import HoverCounter2 from "./components/HoverCounter2"; 
import ComponentC from "./components/ComponentC"; 
import {UserProvider} from "./components/UserContext"; 


function App() {
  return (
    <div className="App">

      <UserProvider value="Omale">
        <ComponentC />
      </UserProvider>
        {/* <Counter2 
          render={(count,incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter2 
          render={(count,incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <ClickCounter name="abobo"/>
        <HoverCounter />
        <User name={(isLoggedIn) => isLoggedIn ? "Vishwas":"Guest"} /> */}
        {/* <ErrorHandler>
          <Hero heroName="Batman"  />
        </ErrorHandler>
        <ErrorHandler>
          <Hero heroName="Joker"  />
        </ErrorHandler> */}
        {/* <PortalDemo /> */}
        {/* <FRparent /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <Inline /> */}
        {/* <Stylesheets primary={true} /> */}
        {/* <NameList /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Guy"/> */}
    </div>
  );
}

export default App;
