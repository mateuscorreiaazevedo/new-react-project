import axios from "axios"
import {
  Cardbox,
  CardImg,
  CardTitle,
  CardPrice,
  CardComments,
  CardLink
} from "./style"

export default function PromotionCard({ elements }) {

  
  
  
  return (
    <Cardbox>
      <CardImg src={elements.imageUrl} alt={elements.title} />
      <div>
        <CardTitle>{elements.title}</CardTitle>
        <CardPrice>R${elements.price}</CardPrice>
        <CardComments>
          {elements.comments.length > 0 && (
            <div>"{elements.comments[0].comment}"</div>
          )}
          <div>
            {elements.comments.length}
            {elements.comments.length > 1 ? " Comentários" : " Comentário"}
          </div>
          <CardLink
            href={elements.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            IR PARA O SITE
          </CardLink>
        </CardComments>
      </div>
    </Cardbox>
  )
}
