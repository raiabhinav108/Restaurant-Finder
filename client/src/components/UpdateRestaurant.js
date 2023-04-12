import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'

const UpdateRestaurant = (props) => {
  const { id } = useParams()
  let history = useHistory()
  const { restaurants } = useContext(RestaurantsContext)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`)
      setName(response.data.data.restaurant.name)
      setLocation(response.data.data.restaurant.location)
      setPriceRange(response.data.data.restaurant.price_range)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    })
    history.push('/')
  }

  return (
    <div>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-control'
            type='text'
            id='name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='form-control'
            type='text'
            id='location'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price_range'>Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className='form-control'
            type='number'
            id='price_range'
          />
        </div>
      </form>
      <button onClick={handleSubmit} className='btn btn-primary' type='submit'>
        Submit
      </button>
    </div>
  )
}

export default UpdateRestaurant
