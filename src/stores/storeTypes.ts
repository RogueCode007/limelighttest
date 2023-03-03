export type ItemDto = {
    id: number
    type : string,
    name: string,
    ratings: string,
    no_of_ratings: string,
    quantity_sold: string,
    price: string,
    vendor: string,
    about: AboutItem
    imgPath: string
    url: string
}
export interface Item {
    id: number
    type : string,
    name: string,
    ratings: string,
    no_of_ratings: string,
    quantity_sold: string,
    price: string,
    vendor: string,
    about: AboutItem
    imgPath: string
}
  
export type AboutItem = {
    brand: string,
    color: string,
    category: string,
    description: string[],
    delivery: string,
    shipping: string,
    weight: string
}