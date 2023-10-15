import './App.css'
import Hello from "./components/Hello"
import Message from "./components/Message"
import Welcome from './components/Welcome';

function App() {

  return (
    <div> 
      <Hello /> 
      <Hello /> 
      <Message />
      <Welcome name="Suleyman " age="25" />
    </div>
  );
}

export default App
