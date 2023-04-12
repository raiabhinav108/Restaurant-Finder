import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'
import StarRating from '../components/StarRating'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReviews'

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurants, setSelectedRestaurants } =
    useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        setSelectedRestaurants(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {selectedRestaurants && (
        <>
          <h1 className='font-weight-light display-1 text-center'>
            {selectedRestaurants.restaurant.name}
          </h1>
          <div className='text-center'>
            <StarRating
              rating={selectedRestaurants.restaurant.average_rating}
            />
            <span className='text-warning ml-1'>
              {selectedRestaurants.restaurant.count
                ? `(${selectedRestaurants.restaurant.count})`
                : '(0)'}
            </span>
          </div>
          <div className='mt-3'>
            <Reviews reviews={selectedRestaurants.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage
