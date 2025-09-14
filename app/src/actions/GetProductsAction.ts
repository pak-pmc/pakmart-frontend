import {http} from "@/src/utils/http";
import {useQuery} from "@tanstack/react-query";
import {response} from "@/src/utils/helpers";
import type {IProduct} from "@/src/interfaces/IProduct";
import {IMeta} from "@/src/interfaces/IMeta";

export const useProducts = (perPage: number = 50, otherQueryParams:string = '') => {
    const fetchProducts = async () => {
        return await http().get(`/v1/products?perPage=${perPage}&${otherQueryParams}`);
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });
    const httpResponse = response<IProduct[]>(data)
    const products: IProduct[] = httpResponse?.data ?? []
    const meta: IMeta = httpResponse?.meta ?? {}

    return {
        products,
        isLoading,
        error,
        meta
    }
};
