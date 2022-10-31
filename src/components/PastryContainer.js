import React, {useEffect, useState} from 'react'
import PastryList from './PastryList'
import './PastryContainer.css'


function PastryContainer({storeName}) {
  const [pastries, setPastries]= useState([])
  const [name,setName]=useState('')
  const [searchResult, setSearchResult]= useState({})
  useEffect(() => {
    fetch("http://localhost:3000/pastries")
    .then((res)=>res.json())
    .then((data)=>setPastries(data))
  }, [])

  function handleName(e){
    setName(e.target.value)
  }
  function handlePastry(e){
    e.preventDefault()
    const filteredPastry= pastries.find((pastry)=> {
      return pastry.name.toLowerCase() === name.toLowerCase()
    })
    console.log(filteredPastry)
    setSearchResult(filteredPastry)
  }

  return (
    <div> 
       <h1 className='storeName'>{storeName}</h1> <br></br>
       <h1 className='menu'>Menu</h1> <br></br>
       <form onSubmit={handlePastry} >
        <input onChange={handleName}></input>
        <button type='submit'>search</button>
       </form>
       <h2>{searchResult.name}</h2> 
        <PastryList pastries={pastries} storeName={storeName}/>
    </div>
  )
}
  
export default PastryContainer
