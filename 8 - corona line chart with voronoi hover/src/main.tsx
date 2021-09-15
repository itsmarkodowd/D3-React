import React from 'react'
import ReactDOM from 'react-dom'
import { useData } from './hooks/useData'
import { LineChart } from './components/LineChart'
import './index.css'

const width = window.innerWidth
const height = window.innerHeight

const App = () => {
  const data = useData()
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading...</div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
