import React from 'react'
import PastryContainer from './PastryContainer'
import PastryCard from './PastryCard'

//map the array of pastries and render the pastries object
 function PastryList({pastries}) {
  const pastryCards= pastries.map(pastry=> <PastryCard pastry={pastry} key={pastry.id}/>)

  return (
    <div>
        {pastryCards}
        
    </div>
  )
}
export default PastryList