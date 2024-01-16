import { GlobalCss } from './styles'

import Hero from './components/Hero'
import CardList from './components/CardList'
import Restaurant from './models/Restaurant'

import hioki from './assets/images/hioki.png'
import trattoria from './assets/images/trattoria.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    infos: ['Destaque da semana', 'Japonesa'],
    rating: 4.9
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Italiana'],
    rating: 4.6
  },
  {
    id: 3,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    infos: ['Destaque da semana', 'Japonesa'],
    rating: 4.9
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    infos: ['Italiana'],
    rating: 4.6
  }
]

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <CardList restaurants={restaurants} />
    </>
  )
}

export default App
