import React, {useEffect, useState} from 'react'
import PastryCard from './PastryCard'
import PastryList from './PastryList'



function PastryContainer({storeName}) {

const [pastries, setPastries]= useState([])

useEffect(() => {
fetch("http://localhost:3000/pastries")
.then((res)=>res.json())
.then((data)=>setPastries(data))
}, [])


  return (
    <div>
       <h1>{storeName}</h1>
        <PastryList pastries={pastries} storeName={storeName}/>
        
        
    </div>
  )
}
export default PastryContainer
