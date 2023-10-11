import './App.css'

function App() {
  const sayHello = ({name}) => {
    return <h1>Hello, {name}</h1>
  }
function App({name}) {

  return (
    <>
      <h1>Hello, world!</h1>
    </>
  )
}

export default App
