import { useState, useEffect } from "react";
import { promotionService } from "../service/promotions";

export const usePromotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const params = {};
  if (search) {
    params.title_like = search;
  }
  useEffect(() => {

    promotionService
      .getAll({ params })
      .then((res) => setPromotions(res.data))
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, [search]);

  const handleChange = (e) => setSearch(e.target.value);

  return {
    promotions,
    loading,
    search,
    handleChange,
  };
};
