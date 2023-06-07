import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const ContentItem = ({ props }) => {
  // const name = "Currency Name";
  // const fullName = "Full Currency Name";
  // const symbol = "$";
  // const code = "USD";
  // const rate = 1.23;
  //використано для прикладу
  const { cc, txt, rate, r030 } = props;
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
      <div className="currencySymbol">{r030}</div>
      <div className="currencyCode">{cc}</div>
      <div>{txt}</div>

      <div>{rate}</div>
      <div className="Buttons">
        <button onClick={handleToggleFavorite}>
          {isFavorite ? (
            <StarIcon style={{ fill: "#E5E201" }} />
          ) : (
            <StarIcon style={{ fill: "gray" }} />
          )}
        </button>
        <Link to={`/${cc}`} className="seeMoreButton">
          <button type="button">See More</button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default ContentItem;
