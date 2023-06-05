import React from "react";
import { testData } from "./ContentTestData";
import TempItem from "./tempItem";
import SelectComponent from "../MainPageSelect/MainPageSelect";
import ContentItem from "../ContentItem/ContentItem";

const ContentList = () => {
  const headerLabels = {
    nameF: "Офіційний курс",
    code: "Повна назва",
    nameS: "Код літерний",
    course: " ",
    symbol: "Символ",
  };
  return (
    <div className="contentList">
      <SelectComponent />
      <TempItem props={headerLabels} />
      {testData.map((item) => {
        return <ContentItem key={item.id} props={item} />;
      })}
    </div>
  );
};

export default ContentList;
