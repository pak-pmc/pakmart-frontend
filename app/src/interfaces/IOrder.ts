export interface IOrder {
    "firstName": string
    "lastName": string,
    "email": string,
    "phoneNumber": string,
    "address": string,
    "city": string,
    "instructions": string,
    "products": IOrderProduct[]
    "variants": IOrderProduct[]
}

export type IOrderProduct = { externalId: string, quantity: number }