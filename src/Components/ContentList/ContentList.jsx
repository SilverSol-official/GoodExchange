import React from "react";
import { testData } from "./ContentTestData";
import TempItem from "./tempItem";
import SelectComponent from "../MainPageSelect/MainPageSelect";

const ContentList = () => {
  const headerLabels = {
    nameF: "Повна назва",
    code: "Код цифровий",
    nameS: "Код літерний",
    course: "Офіційний курс ",
    symbol: "Символ",
  };
  return (
    <div className="contentList">
      <SelectComponent />
      <TempItem props={headerLabels} />
      {testData.map((item) => {
        return <TempItem key={item.id} props={item} />;
      })}
    </div>
  );
};

export default ContentList;
