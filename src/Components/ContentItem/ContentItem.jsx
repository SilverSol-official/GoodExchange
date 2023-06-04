
import React, { useState } from "react";
import '/Users/yaroslavolefirenko/Desktop/GoodExchange/GoodExchange/src/App.css'
import StarIcon from '@mui/icons-material/Star';

const ContentItem = ({ currency }) => {
    const name = "Currency Name";
    const fullName = "Full Currency Name";
    const symbol = "$";
    const code = "USD";
    const rate = 1.23;
    //використано для прикладу
    const [isFavorite, setIsFavorite] = useState(false);
  
    const handleToggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };
  
    const handleSeeMore = () => {
      // Додати логіку, що відбувається при натисканні кнопки "See More"
    };
  
    return (
        <div className="ContentItemConteiner">
        <div className="ContentItem">
        <div className="currencySymbol">{symbol}</div>
        <div className="currencyCode">{code}</div>
        <div>{fullName}</div>
        
                <div>{rate}</div>
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
            </div>
    );
  };

export default ContentItem;