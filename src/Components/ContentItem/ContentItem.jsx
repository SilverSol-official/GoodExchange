import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

const ContentItem = ({ props }) => {
  // const name = "Currency Name";
  // const fullName = "Full Currency Name";
  // const symbol = "$";
  // const code = "USD";
  // const rate = 1.23;
  //використано для прикладу
  const { nameS, nameF, code, course, symbol } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSeeMore = () => {
    // Додати логіку, що відбувається при натисканні кнопки "See More"
  };

  return (
    // <div className="ContentItemConteiner">
    <div className="ContentItem">
      <div className="currencySymbol">{symbol}</div>
      <div className="currencyCode">{nameS}</div>
      <div>{nameF}</div>

      <div>{course}</div>
      <div className="Buttons">
        <button onClick={handleToggleFavorite}>
          {isFavorite ? (
            <StarIcon style={{ fill: "#E5E201" }} />
          ) : (
            <StarIcon style={{ fill: "gray" }} />
          )}
        </button>
        <button onClick={handleSeeMore}>See More</button>
      </div>
    </div>
    // </div>
  );
};

export default ContentItem;
