import {useMutation} from "@tanstack/react-query";
import {IOrder} from "@/src/interfaces/IOrder";
import {http} from "@/src/utils/http";
import {response} from "@/src/utils/helpers";


export const useSendOrderAction = () => {
    const mutation = useMutation({
        mutationFn: async (formData: IOrder) => {
            return await http().post(`/v1/orders`, formData);
        }
    });

    const httpResponse = response(mutation.data)
    const successResponse = httpResponse?.success ?? false

    return {
        sendOrder: mutation.mutateAsync,
        isPending: mutation.isPending,
        error: mutation.error,
        data: httpResponse,
        successResponse,
    }
}
