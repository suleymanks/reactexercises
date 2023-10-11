import './App.css'

function App() {
  const SayHello = ({ name = "Someone" }) => {
    return <h1>Hello, {name}</h1>
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <SayHello />
    </>
  )
}

export default App
