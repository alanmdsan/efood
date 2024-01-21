import { Product } from '../../utils/typedElements'
import ProfileBanner from '../../components/ProfileBanner'
import ProductList from '../../components/ProductList'

const products: Product[] = []

const Restaurant = () => (
  <>
    <ProfileBanner />
    <ProductList products={products} />
  </>
)

export default Restaurant
