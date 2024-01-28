import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { formatPrice, sliceDescription } from '../../utils/functions'
import * as S from './styles'

import close from '../../assets/images/close.png'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => setModalVisible(false)

  const addToCart = () => {
    closeModal()
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <>
      <S.Container>
        <S.ContainerImage>
          <S.Image src={product.foto} alt={product.nome} />
        </S.ContainerImage>
        <S.ContainerDescription>
          <h1>{product.nome}</h1>
          <p>{sliceDescription(product.descricao)}</p>
          <S.Button onClick={() => setModalVisible(true)}>
            Mais detalhes
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
            <S.ModalImage src={product.foto} alt="" />
            <div style={{ marginTop: '32px' }}>
              <h4>{product.nome}</h4>
              <p>{product.descricao}</p>
              <p>Serve de {product.porcao}.</p>
              <S.ModalButton onClick={addToCart}>
                Adicionar ao carrinho - {formatPrice(product.preco)}
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
