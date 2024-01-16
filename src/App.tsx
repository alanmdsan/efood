import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import RoutesComponent from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesComponent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
