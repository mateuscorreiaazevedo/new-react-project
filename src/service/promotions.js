import { api } from "./api"

export const promotionService = {
    getAll: () => {
        return api.get('/promotions?_embed=comments')
    }
}