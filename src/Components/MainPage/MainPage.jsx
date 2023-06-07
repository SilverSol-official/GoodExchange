import react from "react";
import { useDispatch, useSelector } from "react-redux";

import ContentList from "../ContentList/ContentList";

const MainPage = () => {
  let darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <ContentList />
    </div>
  );
};

export default MainPage;
