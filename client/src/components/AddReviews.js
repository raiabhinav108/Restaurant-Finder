import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddReview = () => {
  const history = useHistory()
  const location = useLocation()
  const { id } = useParams()
  const [name, setName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      })
      history.push('/')
      history.push(location.pathname)
    } catch (error) {}
  }

  return (
    <div className='mb-2'>
      <form action=''>
        <div className='form-row'>
          <div className='form-group col-8'>
            <label htmlFor='name'>name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              id='name'
              placeholder='name'
              className='form-control'
            />
          </div>
          <div className='form-group col-4'>
            <label htmlFor='rating'>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id='rating'
              className='custom-select'
            >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='Review'>Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id='Review'
            cols='30'
            rows='10'
            className='form-control'
          ></textarea>
        </div>
        <button
          onClick={handleSubmitReview}
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddReview
