import { sliceDescription } from '../../utils/functions'
import * as S from './styles'
import Tag from '../Tag'

import iconRating from '../../assets/images/star.png'
import Button from '../Button'

type Props = {
  id: number
  name: string
  description: string
  image: string
  highlight: boolean
  type: string
  rating: number
}

const Card = ({
  id,
  name,
  description,
  image,
  highlight,
  type,
  rating
}: Props) => (
  <S.Container>
    <S.ContainerImage>
      <S.Image src={image} alt={name} />
      <S.Infos>
        {highlight && <Tag>Destaque da semana</Tag>}
        {type && <Tag>{type}</Tag>}
      </S.Infos>
    </S.ContainerImage>
    <S.ContainerDescription>
      <S.ContainerName>
        <h1>{name}</h1>
        <S.Rating>
          <h1>{rating}</h1>
          <S.IconRating src={iconRating} />
        </S.Rating>
      </S.ContainerName>
      <p>{sliceDescription(description)}</p>
      <S.ContainerButton>
        <Button to={`restaurant/${id}`} />
      </S.ContainerButton>
    </S.ContainerDescription>
  </S.Container>
)

export default Card
