import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RestaurantContextProvider } from './context/RestaurantsContext'
import Home from './routes/Home'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import UpdatePage from './routes/UpdatePage'
const App = () => {
  return (
    <RestaurantContextProvider>
      <div className='containers'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/restaurants/:id/update'>
              <UpdatePage />
            </Route>
            <Route exact path='/restaurants/:id'>
              <RestaurantDetailPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </RestaurantContextProvider>
  )
}

export default App
