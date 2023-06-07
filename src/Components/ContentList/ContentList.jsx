import React from "react";
import TempItem from "./tempItem";
import SelectComponent from "../MainPageSelect/MainPageSelect";
import ContentItem from "../ContentItem/ContentItem";
import { useSelector } from "react-redux";

const ContentList = () => {
  let currencyData = useSelector((state) => state.currency.currencyData);

  const headerLabels = {
    nameF: "Офіційний курс",
    code: "Повна назва",
    nameS: "Код літерний",
    course: " ",
    symbol: "Код цифровий",
  };

  return (
    <div className="contentList">
      <SelectComponent />
      <TempItem props={headerLabels} />
      {currencyData.map((item) => {
        return <ContentItem key={item.id} props={item} />;
      })}
    </div>
  );
};

export default ContentList;
