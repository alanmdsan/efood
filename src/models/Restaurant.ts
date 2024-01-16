class Restaurant {
  id: number
  name: string
  description: string
  image: string
  infos: string[]
  rating: number

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    infos: string[],
    rating: number
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
    this.infos = infos
    this.rating = rating
  }
}

export default Restaurant
