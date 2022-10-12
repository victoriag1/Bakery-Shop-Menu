import React from 'react'
import PastryCard from './PastryCard'


 function PastryList({pastries}) { 
  const pastryCards= pastries.map(pastry=> <PastryCard pastry={pastry} key={pastry.id}/>)
 
  return (
    <div style={{width:"500px", margin:"auto" }}>
       <div style={{display: "flex", flexWrap:"wrap"}}>{pastryCards}</div> 
        
    </div>
  )
}
export default PastryList