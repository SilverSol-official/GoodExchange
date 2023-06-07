import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../rdx/features/Theme/theme";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "light",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  let darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="logoWrapper">
        <div className="logo">
          <CurrencyExchangeIcon fontSize="large" />
          <h2>Currency Info</h2>
        </div>
        <div>
          <p>Валюти</p>
        </div>
        <div>
          <p>Криптовалюти</p>
        </div>
        <div>
          <p>Про нас</p>
        </div>
      </div>
      <div className="searchWrapper">
        <div className="theme">
          <button
            type="button"
            className={`btn ${darkTheme ? "btn-light" : "btn-outline-dark"}`}
            onClick={() => dispatch(changeTheme())}
          >
            <LightModeIcon sx={{ color: "black" }} />
          </button>
        </div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Пошук…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </header>
  );
};

export default Header;
