import React from 'react'

function PastryCard({pastry}) {
  return (
    <div>
    <h3>{pastry.name}</h3>
    <img src={pastry.image} />
    
    </div>
  )
}
export default PastryCard