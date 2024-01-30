import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { clear, close, remove } from '../../store/reducers/cart'

import { formatPrice } from '../../utils/functions'

import * as S from './styles'

const Cart = () => {
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const [stepDelivery, setStepDelivery] = useState(false)
  const [stepPayment, setStepPayment] = useState(false)
  const [purchaseState, setPurchaseState] = useState<PurchasePayload>()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((totalPrice, currentItem) => {
      return (totalPrice += currentItem.preco)
    }, 0)
  }

  const requiredFieldMessage = 'O campo é obrigatório'

  const formDelivery = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required(requiredFieldMessage),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required(requiredFieldMessage),
      city: Yup.string().required(requiredFieldMessage),
      zipCode: Yup.string().required(requiredFieldMessage),
      number: Yup.number().required(requiredFieldMessage),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      const purchaseDelivery: PurchasePayload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: '',
            number: '',
            code: 0,
            expires: {
              month: 0,
              year: 0
            }
          }
        }
      }
      setPurchaseState(purchaseDelivery)
      setStepPayment(true)
    }
  })

  const formPayment = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpiresMonth: '',
      cardExpiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required(requiredFieldMessage),
      cardNumber: Yup.string().required(requiredFieldMessage),
      cardCode: Yup.number().required(requiredFieldMessage),
      cardExpiresMonth: Yup.number().required(requiredFieldMessage),
      cardExpiresYear: Yup.number().required(requiredFieldMessage)
    }),
    onSubmit: (values) => {
      const purchasePayment: PurchasePayload = {
        products: purchaseState ? purchaseState.products : [],
        delivery: {
          receiver: purchaseState ? purchaseState.delivery.receiver : '',
          address: {
            description: purchaseState
              ? purchaseState.delivery.address.description
              : '',
            city: purchaseState ? purchaseState.delivery.address.city : '',
            zipCode: purchaseState
              ? purchaseState.delivery.address.zipCode
              : '',
            number: purchaseState ? purchaseState.delivery.address.number : 0,
            complement: purchaseState
              ? purchaseState.delivery.address.complement
              : ''
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpiresMonth),
              year: Number(values.cardExpiresYear)
            }
          }
        }
      }
      purchase(purchasePayment)
    }
  })

  const checkDeliveryInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formDelivery.touched
    const isInvalid = fieldName in formDelivery.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkPaymentInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formPayment.touched
    const isInvalid = fieldName in formPayment.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const resetData = () => {
    setStepDelivery(false)
    setStepPayment(false)
    formDelivery.resetForm()
    formPayment.resetForm()
    closeCart()
    reset()
    dispatch(clear())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <>
          {items.length > 0 ? (
            <>
              {stepDelivery ? (
                <>
                  {stepPayment ? (
                    <>
                      {isSuccess && data ? (
                        <>
                          <h4>Pedido realizado - {data.orderId}</h4>
                          <p className="cart-text">
                            Estamos felizes em informar que seu pedido já está
                            em processo de preparação e, em breve, será entregue
                            no endereço fornecido.
                          </p>
                          <p className="cart-text">
                            Gostaríamos de ressaltar que nossos entregadores não
                            estão autorizados a realizar cobranças extras.
                          </p>
                          <p className="cart-text">
                            Lembre-se da importância de higienizar as mãos após
                            o recebimento do pedido, garantindo assim sua
                            segurança e bem-estar durante a refeição.
                          </p>
                          <p className="cart-text">
                            Esperamos que desfrute de uma deliciosa e agradável
                            experiência gastronômica. Bom apetite!
                          </p>
                          <S.Button
                            style={{ marginTop: '16px' }}
                            onClick={resetData}
                          >
                            Concluir
                          </S.Button>
                        </>
                      ) : (
                        <>
                          <h4>
                            Pagamento - Valor a pagar{' '}
                            {formatPrice(getTotalPrice())}
                          </h4>
                          <form onSubmit={formPayment.handleSubmit}>
                            <S.InputGroup>
                              <label htmlFor="cardName">Nome no cartão</label>
                              <input
                                id="cardName"
                                type="text"
                                name="cardName"
                                value={formPayment.values.cardName}
                                onChange={formPayment.handleChange}
                                onBlur={formPayment.handleBlur}
                                className={
                                  checkPaymentInputHasError('cardName')
                                    ? 'error'
                                    : ''
                                }
                              />
                            </S.InputGroup>
                            <S.Row>
                              <S.InputGroup inputWidth="232px">
                                <label htmlFor="cardNumber">
                                  Número do cartão
                                </label>
                                <InputMask
                                  id="cardNumber"
                                  type="text"
                                  name="cardNumber"
                                  value={formPayment.values.cardNumber}
                                  onChange={formPayment.handleChange}
                                  onBlur={formPayment.handleBlur}
                                  className={
                                    checkPaymentInputHasError('cardNumber')
                                      ? 'error'
                                      : ''
                                  }
                                  mask="9999 9999 9999 9999"
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="cardCode">CVV</label>
                                <InputMask
                                  id="cardCode"
                                  type="text"
                                  name="cardCode"
                                  value={formPayment.values.cardCode}
                                  onChange={formPayment.handleChange}
                                  onBlur={formPayment.handleBlur}
                                  className={
                                    checkPaymentInputHasError('cardCode')
                                      ? 'error'
                                      : ''
                                  }
                                  mask="999"
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Row>
                              <S.InputGroup>
                                <label htmlFor="cardExpiresMonth">
                                  Mês de vencimento
                                </label>
                                <InputMask
                                  id="cardExpiresMonth"
                                  type="text"
                                  name="cardExpiresMonth"
                                  value={formPayment.values.cardExpiresMonth}
                                  onChange={formPayment.handleChange}
                                  onBlur={formPayment.handleBlur}
                                  className={
                                    checkPaymentInputHasError(
                                      'cardExpiresMonth'
                                    )
                                      ? 'error'
                                      : ''
                                  }
                                  mask="99"
                                />
                              </S.InputGroup>
                              <S.InputGroup>
                                <label htmlFor="cardExpiresYear">
                                  Ano de vencimento
                                </label>
                                <InputMask
                                  id="cardExpiresYear"
                                  type="text"
                                  name="cardExpiresYear"
                                  value={formPayment.values.cardExpiresYear}
                                  onChange={formPayment.handleChange}
                                  onBlur={formPayment.handleBlur}
                                  className={
                                    checkPaymentInputHasError('cardExpiresYear')
                                      ? 'error'
                                      : ''
                                  }
                                  mask="99"
                                />
                              </S.InputGroup>
                            </S.Row>
                            <S.Button
                              type="submit"
                              disabled={
                                Object.keys(formPayment.touched).length === 0 ||
                                isLoading
                              }
                              style={{ marginTop: '24px' }}
                            >
                              {isLoading
                                ? 'Finalizando pagamento...'
                                : 'Finalizar pagamento'}
                            </S.Button>
                            <S.Button
                              type="button"
                              onClick={() => setStepPayment(false)}
                            >
                              Voltar para a edição de endereço
                            </S.Button>
                          </form>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <h4>Entrega</h4>
                      <form onSubmit={formDelivery.handleSubmit}>
                        <S.InputGroup>
                          <label htmlFor="fullName">Quem irá receber</label>
                          <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formDelivery.values.fullName}
                            onChange={formDelivery.handleChange}
                            onBlur={formDelivery.handleBlur}
                            className={
                              checkDeliveryInputHasError('fullName')
                                ? 'error'
                                : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="address">Endereço</label>
                          <input
                            id="address"
                            type="text"
                            name="address"
                            value={formDelivery.values.address}
                            onChange={formDelivery.handleChange}
                            onBlur={formDelivery.handleBlur}
                            className={
                              checkDeliveryInputHasError('address')
                                ? 'error'
                                : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="city">Cidade</label>
                          <input
                            id="city"
                            type="text"
                            name="city"
                            value={formDelivery.values.city}
                            onChange={formDelivery.handleChange}
                            onBlur={formDelivery.handleBlur}
                            className={
                              checkDeliveryInputHasError('city') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.Row>
                          <S.InputGroup>
                            <label htmlFor="zipCode">CEP</label>
                            <input
                              id="zipCode"
                              type="text"
                              name="zipCode"
                              value={formDelivery.values.zipCode}
                              onChange={formDelivery.handleChange}
                              onBlur={formDelivery.handleBlur}
                              className={
                                checkDeliveryInputHasError('zipCode')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </S.InputGroup>
                          <S.InputGroup>
                            <label htmlFor="number">Número</label>
                            <input
                              id="number"
                              type="text"
                              name="number"
                              value={formDelivery.values.number}
                              onChange={formDelivery.handleChange}
                              onBlur={formDelivery.handleBlur}
                              className={
                                checkDeliveryInputHasError('number')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </S.InputGroup>
                        </S.Row>
                        <S.InputGroup>
                          <label htmlFor="complement">
                            Complemento (opcional)
                          </label>
                          <input
                            id="complement"
                            type="text"
                            name="complement"
                            value={formDelivery.values.complement}
                            onChange={formDelivery.handleChange}
                            onBlur={formDelivery.handleBlur}
                            className={
                              checkDeliveryInputHasError('complement')
                                ? 'error'
                                : ''
                            }
                          />
                        </S.InputGroup>
                        <S.Button
                          type="submit"
                          disabled={
                            Object.keys(formDelivery.touched).length === 0
                          }
                          style={{ marginTop: '24px' }}
                        >
                          Continuar com o pagamento
                        </S.Button>
                        <S.Button
                          type="button"
                          onClick={() => setStepDelivery(false)}
                        >
                          Voltar para o carrinho
                        </S.Button>
                      </form>
                    </>
                  )}
                </>
              ) : (
                <>
                  <ul>
                    {items.map((item) => (
                      <S.CartItem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h3>{item.nome}</h3>
                          <p>{formatPrice(item.preco)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                        />
                      </S.CartItem>
                    ))}
                  </ul>
                  <S.Price>
                    <span>Valor total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </S.Price>
                  <S.Button onClick={() => setStepDelivery(true)}>
                    Continuar com a entrega
                  </S.Button>
                </>
              )}
            </>
          ) : (
            <p className="empty-cart-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          )}
        </>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
