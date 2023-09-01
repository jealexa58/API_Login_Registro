import {z} from 'zod'

export const createDateSchema = z.object({
    description: z.string({
        required_error: 'Description is required',
    }),
    service: z.string({
        required_error: 'Service is required',
    }),
    date: z.string({
        required_error: 'Date is required',
    }),
    hour: z.string({
        required_error: 'Hour is required',
    }),
});