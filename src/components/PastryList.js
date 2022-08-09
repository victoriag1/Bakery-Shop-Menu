import React from 'react'
import PastryCard from './PastryCard'

// In this child component we are mapping through the array of pastries and rendering
// each pastry object onto our home page. We are receiving the pastries prop from 
// the pastry container component and using it it to access what is in our dbjson.
// w that being said we are also adding some styling elements to our component. Lastly,
// we are passing down the pastrycards prop to our home page. 
 function PastryList({pastries}) {
  const pastryCards= pastries.map(pastry=> <PastryCard pastry={pastry} key={pastry.id}/>)
 
  return (
    <div style={{width:"500px", margin:"auto" }}>
       <div style={{display: "flex", flexWrap:"wrap"}}>{pastryCards}</div> 
        
    </div>
  )
}
export default PastryList