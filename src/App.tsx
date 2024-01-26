import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import RoutesComponent from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesComponent />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
