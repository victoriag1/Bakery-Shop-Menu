import React from 'react'
import {useState, useEffect} from 'react'
import './ReviewForm.css'

function ReviewForm() {
const [name, setName]= useState('') // 
const [review, setReview]= useState('') //content of review
const [reviews, setReviews]= useState([]) //1.objects of existing reviews + new review

//useEffect
const displayReviews=()=>reviews.map((reviews)=> 
 <p key={reviews.name}>{reviews.name}<br></br>{reviews.review}</p>)
 
useEffect(()=>{
fetch("http://localhost:3000/Reviews")
  .then((res)=> res.json())
  .then(data=> setReviews(data))
}, [])
// add review to reviewS or setReviewS

//updates name
  function handleName(e){
   e.preventDefault()
  setName(e.target.value)
}
 //updates review   
function handleReview(e){
  setReview(e.target.value)
}

const handleSubmit= (e)=> {
e.preventDefault()
const newReview = {review,name}
    fetch("http://localhost:3000/Reviews", {
    method:"POST",
    headers:{ "Content-Type": "application/json"},
    body: JSON.stringify(newReview)
  })
  .then((res)=>res.json())
  .then((data)=> setReviews([data, ...reviews]))
}

  return (
    <div>
        <h2 className='title'>Reviews</h2> <br/>
    <form className='reviewForm' onSubmit={handleSubmit}>
      <label htmlFor='name'> Name:</label>
      <input onChange={handleName} type="text" name ="name" id="name" placeholder="Your Name Here .." value={name}></input> <br/> <br/>
      <label htmlFor='Review'>Review:</label>
      <input onChange={handleReview} type= "text" placeholder="Your Review Here..." id="reviewform" value={review}></input> <br/> <br/>
      <button type="submit">Submit Review</button> 
    </form>
     <h2 className='oldReviews'>{displayReviews()}</h2>
    </div>
  )
  }

export default ReviewForm