import { FormContainer, FormGroup, FormLabel, FormInput, FormBtn } from "./Style";
import { useForm } from "../../hooks/useForm";

export default function Form() {
  const { setValue, handleSubmit } = useForm();
    
  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <FormContainer>
        <FormGroup>
          <FormLabel htmlFor="title">Título</FormLabel>
          <FormInput type="text" name="title" id="title" onChange={setValue} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="url">Link</FormLabel>
          <FormInput type="text" name="url" id="url" onChange={setValue} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="imageUrl">Imagem (URL)</FormLabel>
          <FormInput type="text" name="imageUrl" id="imageUrl" onChange={setValue} />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="price">Preço</FormLabel>
          <FormInput type="number" name="price" id="price" onChange={setValue} />
        </FormGroup>
        <div>
          <FormBtn type="submit" onClick={handleSubmit}>
            Salvar
          </FormBtn>
        </div>
      </FormContainer>
    </div>
  );
}
