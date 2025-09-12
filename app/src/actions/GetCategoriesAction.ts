import {http} from "@/src/utils/http";
import {useQuery} from "@tanstack/react-query";
import {response} from "@/src/utils/helpers";
import type {ICategory} from "@/src/interfaces/ICategory";

export function useCategories(perPage: number = 50) {

    const fetchCategories = async () => {
        return await http().get(`/v1/categories?perPage=${perPage}`);
    }
    const {data, isLoading, error} = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories
    });
    const httpResponse = response<ICategory[]>(data)
    const categories: ICategory[] = httpResponse?.data ?? []

    return {
        categories,
        isLoading,
        error
    }

}