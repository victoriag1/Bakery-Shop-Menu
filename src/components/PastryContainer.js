import React, {useEffect, useState} from 'react'
import PastryList from './PastryList'
import './PastryContainer.css'


function PastryContainer({storeName}) {
  const [pastries, setPastries]= useState([])


useEffect(() => {
fetch("http://localhost:3000/pastries")
.then((res)=>res.json())
.then((data)=>setPastries(data))
}, [])


  return (
    <div> 
       <h1 className='storeName'>{storeName}</h1> <br></br>
       <h1 className='menu'>Menu</h1> <br></br>
        <PastryList pastries={pastries} storeName={storeName}/>
    </div>
  )}
export default PastryContainer
