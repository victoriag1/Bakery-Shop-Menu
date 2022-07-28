import React from 'react'
import {useState, useEffect} from 'react'
import './ReviewForm.css'

function ReviewForm() {
const [name, setName]= useState('') // content of the name
const [review, setReview]= useState('') //content of review
const [reviews, setReviews]= useState([]) //1.objects of existing reviews + new review

//2. GET request, does not need to be named as default is a GET request
// we are using useEffect here to display an array of already existing reviews
// we are fetching the dbjson of the existing reviews and displaying the data as a callback of SetReviews
 useEffect(()=> {
  fetch("http://localhost:3000/Reviews")
  .then((res)=> res.json())
  .then(data=> setReviews(data))
}, [])


const displayReviews=()=>reviews.map((reviews)=> 
 <p key={reviews.name}>{reviews.name}<br></br>{reviews.review}</p>
 )

// this is telling us "hey when you fetch handleSubmit, display newReview"
const newReview =[name, review]

// this function is fethcing our data in the 
const handleSubmit= (e)=> {
  e.preventDefault()

  fetch("http://localhost:3000/Reviews", {
    method:"POST",
    headers:{ "Content-Type": "application/json"},
    body: JSON.stringify(newReview)
  })
  
// the next two functions will decide what is going to be displayed in the name and review section
// we are using state to render each review and name every time its input into the review section
}
//displays name
  function handleName(e){
    e.preventDefault()
  setName(e.target.value)
}
 //displays review   
  function handleReview(e){
  setReview(e.target.value)
  }
// jsx in  which we are passing down the handle submit prop that will display our review
// we are also adding the actual form with the submit button into the jsx
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