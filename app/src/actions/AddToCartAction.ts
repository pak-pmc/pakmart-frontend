import {IProduct} from "@/src/interfaces/IProduct";
import {useCart} from "@/contexts/cart-context";


interface AddToCartOptions {
    product: IProduct
    selectedVariantIndex?: number
}

export function useAddToCartHandler() {
    const {addItem} = useCart()

    const handleAddToCart = ({product, selectedVariantIndex = 0}: AddToCartOptions) => {
        let name: string
        let externalId: string
        let price: number

        if (product.hasVariants && product.variants?.[selectedVariantIndex]) {
            const variant = product.variants[selectedVariantIndex]
            name = `${product.name} - ${variant.name}`
            externalId = variant.externalId
            price = variant.unitPrice
        } else {
            name = product.name
            externalId = product.externalId
            price = product.discountedPrice ?? product.unitPrice
        }

        addItem({
            externalId,
            name,
            isVariant: product.hasVariants,
            price,
            image: product.images?.[0]?.fileUrl || "",
        })
    }

    return {handleAddToCart}
}
