import React, {useEffect, useState} from 'react'
import PastryList from './PastryList'

// in this pastry container in my home route page, I am making a GET request to display all
// my pastries with their price on the home page. This is strictly where I am making that
// GET request as a parent component and passing down state variables as props to pastry list
// which is a child component. 
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
