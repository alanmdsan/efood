import { ButtonLink } from './styles'

type Props = {
  to: string
}

const Button = ({ to }: Props) => <ButtonLink to={to}>Saiba mais</ButtonLink>

export default Button
