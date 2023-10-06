
import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (

    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <h1>Bookkeeper!</h1>
    </>
  )
}

export default App
