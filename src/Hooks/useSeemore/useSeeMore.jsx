import { useState } from "react";

const useSeeMore = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleSeeMore = (_Id) => {
    setExpandedCard(_Id);
  };

  return { expandedCard, handleSeeMore };
};

export default useSeeMore;
