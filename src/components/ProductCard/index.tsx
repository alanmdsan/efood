import { useState } from 'react'
import { formatPrice, sliceDescription } from '../../utils/functions'
import * as S from './styles'

import close from '../../assets/images/close.png'

type Props = {
  name: string
  description: string
  image: string
  portion: string
  price: number
}

const ProductCard = ({ name, description, image, portion, price }: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => setModalVisible(false)

  return (
    <>
      <S.Container>
        <S.ContainerImage>
          <S.Image src={image} alt={name} />
        </S.ContainerImage>
        <S.ContainerDescription>
          <h1>{name}</h1>
          <p>{sliceDescription(description)}</p>
          <S.Button onClick={() => setModalVisible(true)}>
            Adicionar ao carrinho
          </S.Button>
        </S.ContainerDescription>
      </S.Container>

      <S.Modal className={modalVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img
            src={close}
            alt="Ícone de fechar"
            onClick={closeModal}
            style={{ cursor: 'pointer', float: 'right', margin: '8px' }}
          />
          <S.ModalFlex>
            <S.ModalImage src={image} alt="" />
            <div style={{ marginTop: '32px' }}>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>Serve de {portion}.</p>
              <S.ModalButton>
                Adicionar ao carrinho - {formatPrice(price)}
              </S.ModalButton>
            </div>
          </S.ModalFlex>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default ProductCard
