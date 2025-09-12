import {http} from "@/src/utils/http";
import {ICustomQuotation} from "@/src/interfaces/ICustomQuotation";
import {useMutation} from "@tanstack/react-query";
import {response} from "@/src/utils/helpers";

export const useSendQuotationAction = () => {

    const mutation = useMutation({
        mutationFn: async (formData: ICustomQuotation) => {
            return await http().post(`/v1/quotations`, formData);
        }
    });

    const httpResponse = response(mutation.data)
    const successResponse = httpResponse?.success ?? false

    return {
        sendQuotation: mutation.mutateAsync,
        isPending: mutation.isPending,
        error: mutation.error,
        successResponse,
    }
}