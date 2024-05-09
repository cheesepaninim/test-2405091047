import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sub from './Sub'

function App() {
  const [ conditionA, setConditionA ] = useState(false)
  const [ conditionB, setConditionB ] = useState(false)
  const [ timer, setTimer ] = useState(null)

  useEffect(() => {
    console.log('(useEffect[])')
    init()
  }, [])

  useEffect(() => {
    console.log(`(useEffect[conditionA, conditionB]) : ${conditionA}, ${conditionB}`)
    if(conditionA && conditionB) callStart()

    return () => {
      if(timer) {
        clearTimeout(timer)
        setTimer(null)
      }
    }
  }, [conditionA, conditionB])

  const init = () => {
    console.log('(init)')
    setConditionA(true)
    const conditionBTimer = setTimeout(() => {
      setConditionB(true)
      if(timer) {
        clearTimeout(timer)
        setTimer(null)
      }
    }, 2*1000)
    setTimer(conditionBTimer)
  }

  const callStart = () => {
    console.log('(callStart) !!!')
  }

  return (
    <>
      <h1>Main Page</h1>
      <br />
      <Sub init={init} setConditionA={setConditionA} setConditionB={setConditionB} />
    </>
  )
}

export default App
