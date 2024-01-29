import { BounceLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <BounceLoader color={colors.salmon} size={50} />
  </Container>
)

export default Loader
