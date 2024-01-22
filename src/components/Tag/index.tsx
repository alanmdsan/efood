import { capitalizeFirst } from '../../utils/functions'
import { TagContainer } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => (
  <TagContainer>{capitalizeFirst(children)}</TagContainer>
)

export default Tag
