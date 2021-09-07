import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useWorldAtlas } from './hooks/useWorldAtlas'
import { useData } from './hooks/useData'
import { BubbleMap } from './components/BubbleMap'
import { DateHistogram } from './components/DateHistogram'
import './index.css'

const width = 960
const height = 500
const dateHistogramSize = 0.2

const xValue = (d) => d['Reported Date']

const App = () => {
  const worldAtlas = useWorldAtlas()
  const data = useData()
  const [brushExtent, setBrushExtent] = useState()

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>
  }

  const filteredData = brushExtent
    ? data.filter((d) => {
        const date = xValue(d)
        return date > brushExtent[0] && date < brushExtent[1]
      })
    : data

  return (
    <svg width={width} height={height}>
      <BubbleMap
        data={data}
        filteredData={filteredData}
        worldAtlas={worldAtlas}
      />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          width={width}
          height={dateHistogramSize * height}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
