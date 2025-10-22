export interface ICart {
    externalId: string
    name: string
    price: number
    image: string
    isVariant: boolean
    quantity: number
    category?: object
}