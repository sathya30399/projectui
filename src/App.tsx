import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Section_1 from './components/Section_1'
import Section_2 from './components/Section_2'
import Section_3 from './components/Section_3'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Section_1></Section_1>
      <Section_2></Section_2>
      <Section_3></Section_3>
      <Footer></Footer>
    </div>
  )
}

export default App
