import PromotionCard from "../Card/Card"
import { ListContainer, ListHeader } from '../style'
import { Link } from "react-router-dom"
import PromotionSearch from "../Search/Search"
import { usePromotions } from "../../../hooks/usePromotions"


export default function PromotionList() {
    const { handleChange, loading, promotions, search} = usePromotions();


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
            {!!loading && <div>Carregando...</div>}
            {promotions.map(promotion => {
                return <PromotionCard elements={promotion} key={promotion.id}  />
            })}
        </ListContainer>
    )
}