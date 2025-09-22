import {http} from "@/src/utils/http";
import {useQuery} from "@tanstack/react-query";
import {response} from "@/src/utils/helpers";
import type {IProduct} from "@/src/interfaces/IProduct";
import {IMeta} from "@/src/interfaces/IMeta";

// Low-level API call used by both the hook and imperative flows
export async function fetchProductsApi(perPage: number = 50, page: number = 1, otherQueryParams: string = '') {
    const qp = new URLSearchParams();
    qp.set('perPage', String(perPage));
    qp.set('page', String(page));
    // otherQueryParams is expected to be a pre-formatted string like "filters=..." or "".
    const suffix = otherQueryParams ? `&${otherQueryParams}` : '';
    return await http().get(`/v1/products?${qp.toString()}${suffix}`);
}

export const useProducts = (perPage: number = 50, page:number = 1, otherQueryParams:string = '') => {
    const fetchProducts = async () => {
        return await fetchProductsApi(perPage, page, otherQueryParams);
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ['products', perPage, page, otherQueryParams],
        queryFn: fetchProducts
    });
    const httpResponse = response<IProduct[]>(data)
    const products: IProduct[] = httpResponse?.data ?? []
    const meta: IMeta = httpResponse?.meta ?? ({} as IMeta)

    return {
        products,
        isLoading,
        error,
        meta
    }
};
