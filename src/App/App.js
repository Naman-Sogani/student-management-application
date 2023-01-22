import React from "react";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import Header from "../components/Header";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import Students from "../pages/Students/Students";
import { color } from "@material-ui/system";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: "#f8324526"
    }
  }
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%"
  }
});

function App() {
  const classes = useStyles;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Header />

        <Students />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
