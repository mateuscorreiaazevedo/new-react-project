import { api } from "./api"

export const promotionService = {
    getAll: ({...prop}) => {
        return api.get('/promotions?_embed=comments', {...prop})
    }
}