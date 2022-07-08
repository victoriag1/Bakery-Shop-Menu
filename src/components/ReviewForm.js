import React from 'react'
import {useState} from 'react'

 

function ReviewForm() {
const [name, setName]= useState('')
const [review, setReview]= useState('')

const newReview ={name, review}

const handleSubmit= (e)=> {
  e.preventDefault()

  fetch("http://localhost:3000/pastries", {
    method:"POST",
    headers:{ "Content-Type": "applixation/json"},
    body: JSON.stringify(newReview)
  })
  
}

  function handleName(e){
  setName(e.target.value)}
    
  function handleReview(e){
  setReview(e.target.value)
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'> Name: </label>
      <input onChange={handleName} type="text" name ="name" id="name" value={name}></input> <br/> <br/>
      <label htmlFor='Review'>Review: </label>
      <input onChange={handleReview} type= "text" placeholder="Review..." id="reviewform" value={review}></input> <br/> <br/>
      <button type="submit">Submit Review</button> 
    </form>
  )
  }
export default ReviewForm