import { useParams } from "react-router-dom"

export default function Form() {
    const { id } = useParams()

    return (
        <div>
            FORM
            {id &&(
                <div>id: {id}</div>
            )}
        </div>
    )
}