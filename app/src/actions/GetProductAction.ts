import {http} from "@/src/utils/http";
import {useQuery} from "@tanstack/react-query";
import {response} from "@/src/utils/helpers";
import type {IProduct} from "@/src/interfaces/IProduct";

export const useProduct = (productExternalId: string) => {
    const fetchProduct = async () => {
        return await http().get(`/v1/products/${productExternalId}`);
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ['product', productExternalId],
        queryFn: fetchProduct
    });
    const httpResponse = response<IProduct>(data)
    const product: IProduct = httpResponse?.data ?? []
    return {
        product,
        isLoading,
        error
    }
};
