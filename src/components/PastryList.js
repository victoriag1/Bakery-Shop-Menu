import React from 'react'
import PastryCard from './PastryCard'

//map the array of pastries and render the pastries object
 function PastryList({pastries}) {
  const pastryCards= pastries.map(pastry=> <PastryCard pastry={pastry} key={pastry.id}/>)
 // const pastryNames=pastries.map(pastry => )
  return (
    <div style={{width:"500px", margin:"auto" }}>
      <h2>Menu</h2>
       <div style={{display: "flex", flexWrap:"wrap"}}>{pastryCards}</div> 
        
    </div>
  )
}
export default PastryList