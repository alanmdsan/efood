import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/RestaurantPage'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
)

export default RoutesComponent
