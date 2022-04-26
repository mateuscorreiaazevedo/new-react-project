import { promotionService } from "../../../service/promotions"
import PromotionCard from "../Card/Card"
import { ListContainer, ListHeader } from '../style'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PromotionSearch from "../Search/Search"

export default function PromotionList({ loading, promotion }) {
    
    const [promotions, setPromotions] = useState([])
    const [search, setSearch] = useState('')
    
    const handleChange = (e) => {
        let event = e.target.value
        return setSearch(event)
    }
    useEffect(() => {
        const params = {}
        if (search) {
            params.title_like = search
        }
        promotionService
        .getAll({ params })
        .then(res => setPromotions(res.data))
        .catch(err => alert(err.message))
    }, [search])
    
    if(loading) {
        return <div>Carregando...</div>
    }
    return (
        <ListContainer>
            <ListHeader>
                <h1>PROMO SHOW</h1>
                <Link to="/create">NOVA PROMOÇÃO</Link>
            </ListHeader>
            <PromotionSearch 
                type="search"
                placeholder="Buscar"
                value={search}
                onChange={handleChange}
            />
            {promotions.map(promotion => {
                return <PromotionCard elements={promotion} key={promotion.id}  />
            })}
        </ListContainer>
    )
}