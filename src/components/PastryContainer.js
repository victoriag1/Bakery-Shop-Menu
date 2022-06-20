import React, {useEffect, useState} from 'react'


function PastryContainer() {

const [pastries, setPastries]= useState([])

useEffect(() => {
fetch ("http://localhost:3000/pastries")
.then((res)=>res.json())
.then((data)=>setPastries(data))
}, [])


  return (
    <div>

    </div>
  )
}
export default PastryContainer