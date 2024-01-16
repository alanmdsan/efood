import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import RoutesComponent from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
