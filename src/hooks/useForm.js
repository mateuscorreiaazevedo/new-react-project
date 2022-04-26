import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormService } from "../service/postPromotion";

export const useForm = () => {
  const [values, setValues] = useState({});
  let navigate = useNavigate();

  const setValue = (event) => {
    const { name, value } = event.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    FormService
      .save(values)
      .then((response) => {
          navigate("/");
      });
  };
  return {
      setValue,
      handleSubmit
  }
};
