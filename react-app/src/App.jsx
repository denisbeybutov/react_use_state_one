import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter/counter'
import TextToggle from './TextToggle/textToggle'
import ColorSwitcher from './ColorSwitcher/ColorSwitcher'
import CountTimeout from './CountTimeout/CountTimeout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>use state 1</p>
      <Counter/>
      <br /> <br />
      <TextToggle/>
      <br /> <br />
      <ColorSwitcher/>

      <br /> <br />
      <br /> <br />
      <p>use state 2</p>
      <CountTimeout/>

    </>
  )
}

export default App
