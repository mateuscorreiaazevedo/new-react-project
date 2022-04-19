// import { promotionService } from "../../../service/promotions"
import axios from "axios"
import { useEffect, useState } from "react"
import PromotionCard from "../Card/Card"

export default function PromotionList() {

    const [promotions, setPromotions] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9002/promotions?_embed=comments')
            .then(res => setPromotions(res.data))
            .catch(err => alert(err.message))
    }, [])
    
    return (
        <div>
            {
                promotions.map(promotion => {
                   return <PromotionCard elements={promotion} key={promotion.id} />
                })
            }
        </div>
    )
}