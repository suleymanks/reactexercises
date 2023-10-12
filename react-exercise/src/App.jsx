import './App.css'

function App() {

  const Function = (a, b) => {
    const sum = a + b;
    return (
    <>
      Sum: {sum}
    </>
  )  
  }

  
  return (
    <>
      <h2>{Function(3,5)}</h2>
    </>
  )
}

export default App
