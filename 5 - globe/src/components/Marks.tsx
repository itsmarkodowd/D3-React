import React from 'react'
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { getRandomColor } from '../util/randomColor'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

export const Marks = ({ data: { land, interiors } }) => (
  <g className="marks">
    <path className="background" d={path({ type: 'Sphere' })} />
    <path className="graticules" d={path(graticule())} />
    {land.features.map((feature) => (
      <path class="land" d={path(feature)} />
    ))}
    <path className="border" d={path(interiors)} />
  </g>
)
