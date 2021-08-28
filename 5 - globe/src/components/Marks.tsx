import React from 'react'
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { getRandomColor } from '../util/randomColor'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

export const Marks = ({ data: { land, interiors } }) => {
  console.log('land', land)

  return (
    <g className="marks">
      <path className="background" d={path({ type: 'Sphere' })} />
      <path className="graticules" d={path(graticule())} />
      {land.features.map((feature) => (
        <path class="border" d={path(feature)} />
      ))}
      <path className="interiors" d={path(interiors)} />
    </g>
  )
}
