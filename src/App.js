import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import ClassCounterTwo from './components/useState/ClassCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';
import HookCounterOne from './components/useEffect/HookCounterOne';
import ClassCounterOne from './components/useEffect/ClassCounterOne';

function App() {
  return (
    <div className="App">
      <HookCounterOne />
      <ClassCounterOne />
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <ClassCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}
    </div>
  );
}

export default App;
