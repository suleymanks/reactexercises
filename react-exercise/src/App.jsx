import './App.css'

function App() {

  const SayHello = ({ name }) => {
    return <h1>Hello, {name}</h1>
  }

  const JSXExpression = <p>"Suleyman"</p>

  return (
    <>
      <h1>Hello, world!</h1>
      <SayHello name={JSXExpression}/>
    </>
  )
}

export default App
