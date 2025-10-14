import {http} from "@/src/utils/http";
import {useQuery} from "@tanstack/react-query";
import {response} from "@/src/utils/helpers";
import type {IProduct} from "@/src/interfaces/IProduct";

export const useFeaturedProducts = () => {
    const fetchFeaturedProducts = async () => {
        return await http().get(`/v1/products/featured`);
    }
    const {data, isLoading, error} = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: fetchFeaturedProducts
    });
    const httpResponse = response<IProduct[]>(data)
    const products: IProduct[] = httpResponse?.data ?? []
    return {
        products,
        isLoading,
        error
    }
};
