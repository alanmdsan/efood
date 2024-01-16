import * as S from './styles'
import Tag from '../Tag'

import iconRating from '../../assets/images/star.png'
import Button from '../Button'

type Props = {
  name: string
  description: string
  image: string
  infos: string[]
  rating: number
}

const Card = ({ name, description, image, infos, rating }: Props) => (
  <S.Container>
    <S.ContainerImage>
      <img src={image} alt={name} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
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
      <p>{description}</p>
      <S.ContainerButton>{/* <Button to={name} /> */}</S.ContainerButton>
    </S.ContainerDescription>
  </S.Container>
)

export default Card
