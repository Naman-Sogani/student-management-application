import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ListIcon from "@material-ui/icons/List";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
// import { useStateValue } from "../StateProvider";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#d4d0f5"
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2"
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1)
    }
  }
}));

export default function Header() {
  const userList = useSelector(state => state.users.value);
  const classes = useStyles();
  // const [{ registerBasket }, dispatch] = useStateValue();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              {/* <Badge badgeContent={registerBasket.length} color="primary"> */}
              <Badge badgeContent={userList.length} color="primary">

                <ListIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
