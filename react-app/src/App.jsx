import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter/counter'
import TextToggle from './TextToggle/textToggle'
import ColorSwitcher from './ColorSwitcher/ColorSwitcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <br /> <br />
      <TextToggle/>
      <br /> <br />
      <ColorSwitcher/>
    </>
  )
}

export default App
