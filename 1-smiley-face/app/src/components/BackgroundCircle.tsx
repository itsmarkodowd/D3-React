import React from 'react'

const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const BackgroundCircle = ({ radius, strokeWidth }) => (
  <circle
    r={radius}
    fill={getRandomColor()}
    stroke="black"
    stroke-width={strokeWidth}
  />
)
